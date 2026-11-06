(() => {
  "use strict";

  const section = document.querySelector(".hidden-buzz");
  const form = document.querySelector("#hidden-buzz-form");
  const year = document.querySelector("#hidden-buzz-year");
  const status = document.querySelector("#hidden-buzz-status");
  const fact = document.querySelector("#hidden-buzz-fact");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let confetti = null;
  let cleanupTimer = null;

  function clearConfetti() {
    window.clearTimeout(cleanupTimer);
    confetti?.remove();
    confetti = null;
    cleanupTimer = null;
  }

  function celebrate() {
    clearConfetti();
    if (reducedMotion.matches) return;
    confetti = document.createElement("div");
    confetti.className = "buzz-confetti";
    confetti.setAttribute("aria-hidden", "true");
    const colors = ["#e6bb36", "#171717", "#f7d96b", "#a3a3a3"];
    for (let i = 0; i < 48; i += 1) {
      const piece = document.createElement("span");
      piece.style.setProperty("--left", `${Math.random() * 100}%`);
      piece.style.setProperty("--drift", `${Math.random() * 160 - 80}px`);
      piece.style.setProperty("--spin", `${Math.random() * 720 - 360}deg`);
      piece.style.setProperty("--delay", `${Math.random() * 0.3}s`);
      piece.style.setProperty("--color", colors[i % colors.length]);
      confetti.append(piece);
    }
    document.body.append(confetti);
    cleanupTimer = window.setTimeout(clearConfetti, 2800);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const answer = year.value.trim();
    clearConfetti();
    fact.hidden = true;
    section.classList.remove("is-unlocked");
    if (!/^[0-9]{4}$/.test(answer)) {
      year.setAttribute("aria-invalid", "true");
      status.textContent = "Enter a four-digit year to try the surprise.";
      year.focus();
      return;
    }
    if (answer !== "1886") {
      year.setAttribute("aria-invalid", "true");
      status.textContent = "Not quite! Hint: it all started at an Atlanta soda fountain in the 1880s.";
      year.focus();
      return;
    }
    year.removeAttribute("aria-invalid");
    section.classList.add("is-unlocked");
    status.textContent = "You found the buzz! 1886 is the year. A little history, a little fizz, and a big thank-you for being here.";
    fact.hidden = false;
    celebrate();
  });

  year.addEventListener("input", () => year.removeAttribute("aria-invalid"));
  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) clearConfetti();
  });
  window.addEventListener("pagehide", clearConfetti);
  section.hidden = false;
})();
