(() => {
  "use strict";

  const baseResources = window.BOTTLER_BUZZ_RESOURCES;
  const libraryResources = window.BOTTLER_BUZZ_LIBRARY;
  const resources = Array.isArray(baseResources) && Array.isArray(libraryResources) ? [...baseResources, ...libraryResources] : null;
  const grid = document.querySelector("#resource-grid");
  const presentationGrid = document.querySelector("#presentation-grid");
  const presentationSection = document.querySelector("#presentation-tools");
  const librarySection = document.querySelector("#more-resources");
  const appFilter = document.querySelector("#app-filter");
  const topicFilter = document.querySelector("#topic-filter");
  const search = document.querySelector("#search");
  const count = document.querySelector("#result-count");
  const reset = document.querySelector("#reset-filters");
  const empty = document.querySelector("#empty-state");
  const dialog = document.querySelector("#resource-dialog");
  const content = document.querySelector("#dialog-content");
  const copy = document.querySelector("#copy-content");
  const status = document.querySelector("#copy-status");
  const state = { type: "all", app: "all", topic: "all", query: "" };
  let opener = null;
  let dialogVersion = 0;
  const types = ["Worksheets", "Prompts", "Agents", "Skills"];
  const typeLabels = { Worksheets: "Fill-out worksheet", Prompts: "Prompt", Agents: "Agent", Skills: "Skill" };

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function resourceUrl(resource) {
    if (!resource.url || !resource.url.trim()) return null;
    const url = new URL(resource.url, document.baseURI);
    if (!["http:", "https:", "file:"].includes(url.protocol)) {
      throw new Error(`Unsupported resource URL for "${resource.title}". Use a relative filename or an HTTP(S) URL.`);
    }
    return url;
  }

  function validateResources() {
    if (!Array.isArray(resources)) throw new Error("resources.js and prompt-library.js must both load and define their resource arrays.");
    const ids = new Set();
    resources.forEach((resource) => {
      if (!resource || ["id", "title", "summary", "excerpt", "footer", "topic"].some((key) => typeof resource[key] !== "string" || !resource[key].trim()) ||
          !types.includes(resource.type) || ids.has(resource.id)) {
        throw new Error("Each resource needs a unique ID, title, summary, excerpt, footer, topic, and a supported type.");
      }
      ids.add(resource.id);
      if (!Array.isArray(resource.apps) || !resource.apps.length ||
          resource.apps.some((app) => typeof app !== "string" || !app.trim()) ||
          (resource.featured !== undefined && typeof resource.featured !== "boolean") ||
          (resource.aliases !== undefined && (!Array.isArray(resource.aliases) || resource.aliases.some((alias) => typeof alias !== "string"))) ||
          (resource.format !== undefined && resource.format !== "Template")) {
        throw new Error(`"${resource.title}" needs an app/tool list and valid optional featured, aliases, and format values.`);
      }
      if (!["download", "view"].includes(resource.action) ||
          (resource.url !== undefined && typeof resource.url !== "string") ||
          (resource.content !== undefined && typeof resource.content !== "string")) {
        throw new Error(`"${resource.title}" needs a download or view action, with URL and content values supplied as strings.`);
      }
      if (resource.type !== "Worksheets" && typeof resource.sample !== "boolean") {
        throw new Error(`"${resource.title}" needs a true/false sample label.`);
      }
      resourceUrl(resource);
    });
  }

  function tags(resource, showAllApps = false) {
    const row = element("div", "tags");
    const label = resource.format === "Template" && resource.type === "Prompts" ? "Prompt template" : typeLabels[resource.type];
    row.append(element("span", `tag type-${resource.type.toLowerCase()}`, label));
    const apps = showAllApps ? resource.apps : resource.apps.slice(0, 1);
    apps.forEach((app) => row.append(element("span", "tag app-tag", app)));
    return row;
  }

  function openResource(resource, button) {
    opener = button;
    dialogVersion += 1;
    document.querySelector("#dialog-title").textContent = resource.title;
    document.querySelector("#dialog-summary").textContent = resource.summary;
    document.querySelector("#dialog-tags").replaceChildren(...tags(resource, true).childNodes);
    document.querySelector(".sample-notice").hidden = !resource.sample;
    document.querySelector(".content-label").textContent = resource.sample ? "Full sample text" : "Full resource text";
    content.value = resource.content;
    content.setSelectionRange(0, 0);
    copy.textContent = resource.sample ? "Copy sample" : "Copy text";
    copy.disabled = false;
    status.textContent = resource.sample ? "Replace bracketed placeholders before using this text." : "Copy this text into the AI tool it was written for.";
    dialog.showModal();
    document.body.classList.add("dialog-open");
    document.querySelector("#close-dialog").focus();
    content.scrollTop = 0;
  }

  function card(resource) {
    const article = element("article", "resource-card");
    article.append(tags(resource));
    const heading = element("h3", "", resource.title);
    heading.id = `title-${resource.id}`;
    article.setAttribute("aria-labelledby", heading.id);
    article.append(heading, element("p", "card-summary", resource.summary), element("blockquote", "card-excerpt", resource.excerpt));
    const availability = element("p", "card-availability");
    const footer = element("div", "card-footer");
    footer.append(element("span", "card-category", resource.footer));
    const url = resourceUrl(resource);
    if (url) {
      const label = resource.action === "download" ? "Download" : "View";
      const link = element("a", "card-action", label);
      link.href = url.href;
      link.setAttribute("aria-label", `${label}: ${resource.title}`);
      if (resource.action === "download") link.setAttribute("download", "");
      else {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", `View: ${resource.title} (opens in a new tab)`);
      }
      const note = resource.action === "view" ? "Opens in a new tab" : "Download may open in your browser";
      availability.textContent = `${resource.sample ? "SAMPLE / " : ""}${note}`;
      footer.append(link);
    } else if (resource.type !== "Worksheets" && resource.action === "view" && resource.content && resource.content.trim()) {
      availability.textContent = resource.sample ? "SAMPLE / editable starting point" : "Ready to use / adapt to your task";
      const button = element("button", "card-action", "View");
      button.type = "button";
      button.setAttribute("aria-label", `View ${resource.title}`);
      button.addEventListener("click", () => openResource(resource, button));
      footer.append(button);
    } else {
      const label = resource.type === "Worksheets" ? "PDF pending" : resource.action === "download" ? "Download pending" : "Content pending";
      availability.textContent = `${resource.sample ? "SAMPLE / " : ""}${label} - not yet available`;
      const button = element("button", "pending-button", label);
      button.type = "button";
      button.disabled = true;
      footer.append(button);
    }
    article.append(availability, footer);
    return article;
  }

  function render() {
    const terms = state.query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const matches = resources.filter((resource) => {
      const text = [resource.title, resource.topic, resource.type, resource.summary, resource.excerpt, resource.footer, ...resource.apps, ...(resource.aliases || []), resource.content || ""].join(" ").toLowerCase();
      return (state.type === "all" || resource.type === state.type) &&
        (state.app === "all" || resource.apps.includes(state.app)) &&
        (state.topic === "all" || resource.topic === state.topic) &&
        terms.every((term) => text.includes(term));
    });
    const featured = matches.filter((resource) => resource.featured);
    const library = matches.filter((resource) => !resource.featured)
      .sort((a, b) => Number(Boolean(a.sample)) - Number(Boolean(b.sample)));
    presentationGrid.replaceChildren(...featured.map(card));
    grid.replaceChildren(...library.map(card));
    presentationSection.hidden = featured.length === 0;
    librarySection.hidden = library.length === 0;
    document.querySelector("#presentation-count").textContent = `${featured.length} resource${featured.length === 1 ? "" : "s"}`;
    document.querySelector("#library-count").textContent = `${library.length} resource${library.length === 1 ? "" : "s"}`;
    document.querySelectorAll(".intro-links a").forEach((link) => {
      link.hidden = link.hash === "#presentation-tools" ? presentationSection.hidden : librarySection.hidden;
    });
    count.textContent = `${matches.length} of ${resources.length} resource${resources.length === 1 ? "" : "s"}`;
    empty.hidden = matches.length > 0;
    reset.hidden = state.type === "all" && state.app === "all" && state.topic === "all" && !state.query;
    const categoryEmpty = state.type !== "all" && !resources.some((resource) => resource.type === state.type);
    empty.querySelector("h3").textContent = categoryEmpty ? `No ${state.type.toLowerCase()} added yet.` : "No matching resources just yet.";
    empty.querySelector("p").textContent = categoryEmpty ? "This category is ready for resources. Explore another category in the meantime." : "Try a shorter search or broaden your resource type, app, or topic.";
    const pending = resources.some((resource) => resource.action === "download" && !resourceUrl(resource));
    document.querySelector(".availability-note").replaceChildren(
      element("strong", "", "A quick heads-up: "),
      document.createTextNode(`Worksheets are resources you fill out. ${pending ? "Some downloads are pending. " : ""}Resources marked SAMPLE are editable examples, not final presentation materials.`)
    );
  }

  function resetFilters() {
    state.type = state.app = state.topic = "all";
    appFilter.value = topicFilter.value = "all";
    state.query = search.value = "";
    document.querySelectorAll(".filter").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.value === "all")));
    render();
    search.focus();
  }

  function selectText() {
    content.focus();
    content.select();
    status.textContent = "Text selected. Press Ctrl+C (Windows) or Command+C (Mac), or use your device's Copy command.";
  }

  document.querySelector("#close-dialog").addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => {
    dialogVersion += 1;
    document.body.classList.remove("dialog-open");
    if (opener && opener.isConnected) opener.focus();
  });
  document.querySelector("#select-content").addEventListener("click", selectText);
  copy.addEventListener("click", async () => {
    const version = dialogVersion;
    copy.disabled = true;
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(content.value);
      if (version === dialogVersion && dialog.open) status.textContent = "Copied. Review the text before using it in your approved AI tool.";
    } catch (error) {
      if (version === dialogVersion && dialog.open) {
        selectText();
        status.textContent = "Automatic copy is unavailable or was blocked by your browser. Text selected: press Ctrl+C (Windows) or Command+C (Mac), or use your device's Copy command.";
      }
    } finally {
      if (version === dialogVersion) copy.disabled = false;
    }
  });

  try {
    validateResources();
    const apps = [...new Set(resources.flatMap((resource) => resource.apps))].sort((a, b) => a.localeCompare(b));
    const topics = [...new Set(resources.map((resource) => resource.topic))].sort((a, b) => a.localeCompare(b));
    [[appFilter, apps], [topicFilter, topics]].forEach(([select, values]) => {
      values.forEach((value) => {
        const option = element("option", "", value);
        option.value = value;
        select.append(option);
      });
    });
    [[appFilter, "app"], [topicFilter, "topic"]].forEach(([select, key]) => {
      select.addEventListener("change", () => { state[key] = select.value; render(); });
    });
    search.addEventListener("input", () => { state.query = search.value; render(); });
    document.querySelector(".search-form").addEventListener("submit", (event) => event.preventDefault());
    document.querySelector("#type-filters").addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      state.type = button.dataset.value;
      document.querySelectorAll("#type-filters button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      render();
    });
    reset.addEventListener("click", resetFilters);
    document.querySelector("#empty-reset").addEventListener("click", resetFilters);
    render();
  } catch (error) {
    const message = document.querySelector("#load-error");
    message.textContent = `Resources could not be loaded. Check resources.js and prompt-library.js. ${error.message}`;
    message.hidden = false;
    count.textContent = "Resources unavailable";
    console.error(error);
  }
})();
