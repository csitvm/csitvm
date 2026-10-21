/* Loaded in <head> on every page, before first paint.
   Light is the default. Only an explicit earlier choice by the visitor (saved by site.js) switches to dark.
   The operating-system colour preference is deliberately NOT followed. */
(function () {
  try {
    if (localStorage.getItem("csitvm-theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  } catch (e) { /* storage blocked: stay light */ }
})();
