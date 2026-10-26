(() => {
  "use strict";

  // Add only Stephanie's confirmed public details, then update this file's version in index.html.
  const profile = {
    title: "HR, Director at Reyes Coca-Cola Bottling",
    email: "stephanie.brower@reyesccb.com",
    linkedIn: "https://www.linkedin.com/in/stephbrower/"
  };

  const card = document.querySelector(".business-card");
  const front = card.querySelector(".business-card-front");
  const back = card.querySelector(".business-card-back");
  const toggle = document.querySelector("#presenter-toggle");
  const status = document.querySelector("#presenter-status");
  const hover = window.matchMedia("(hover: hover) and (pointer: fine)");
  let pinned = false;
  let flipped = false;

  function showBack(open) {
    flipped = open;
    if (!open && back.contains(document.activeElement)) toggle.focus();
    card.classList.toggle("is-flipped", open);
    front.inert = open;
    back.inert = !open;
    front.setAttribute("aria-hidden", String(open));
    back.setAttribute("aria-hidden", String(!open));
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Back to profile" : "Contact details";
  }

  function enableLink(selector, href, detail, newTab = false) {
    const link = document.querySelector(selector);
    link.href = href;
    link.removeAttribute("aria-disabled");
    link.removeAttribute("tabindex");
    link.querySelector(".contact-detail").textContent = detail;
    if (newTab) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", "Stephanie Brower on LinkedIn (opens in a new tab)");
    }
  }

  try {
    if (Object.values(profile).some(value => typeof value !== "string")) {
      throw new Error("Title, email, and LinkedIn must be text values.");
    }
    const title = profile.title.trim();
    const email = profile.email.trim();
    const linkedIn = profile.linkedIn.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Enter a valid public email address.");
    }
    if (linkedIn) {
      const url = new URL(linkedIn);
      if (url.protocol !== "https:" || !/^(www\.)?linkedin\.com$/.test(url.hostname) ||
          !url.pathname.startsWith("/in/") || !url.pathname.slice(4) || url.username || url.password) {
        throw new Error("Use an HTTPS LinkedIn profile URL beginning with linkedin.com/in/ or www.linkedin.com/in/.");
      }
    }
    if (title) {
      const role = document.querySelector("#presenter-role");
      role.textContent = title;
      role.hidden = false;
    }
    if (email) enableLink("#presenter-email", `mailto:${encodeURIComponent(email)}`, email);
    if (linkedIn) enableLink("#presenter-linkedin", linkedIn, "View profile", true);
    const missing = [!title && "title", !email && "email", !linkedIn && "LinkedIn"].filter(Boolean);
    status.textContent = missing.length ? `Awaiting confirmed ${missing.join(", ")}.` : "";
    status.hidden = !missing.length;
    showBack(false);
    toggle.hidden = false;
  } catch (error) {
    status.hidden = false;
    status.textContent = `Business card setup needs attention: ${error.message} Check presenter.js.`;
    console.error("Business card configuration failed.", error);
    return;
  }

  card.querySelector(".business-card-scene").addEventListener("pointerenter", () => {
    if (hover.matches) showBack(true);
  });
  card.addEventListener("pointerleave", () => {
    if (!pinned && !back.contains(document.activeElement)) showBack(false);
  });
  card.addEventListener("focusout", (event) => {
    if (!pinned && !card.matches(":hover") && !card.contains(event.relatedTarget)) showBack(false);
  });
  toggle.addEventListener("click", () => {
    pinned = !flipped;
    showBack(pinned);
    if (pinned) back.querySelector("a[href]")?.focus();
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && flipped) {
      event.preventDefault();
      pinned = false;
      showBack(false);
      toggle.focus();
    }
  });
})();
