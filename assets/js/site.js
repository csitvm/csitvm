/* CSI Trivandrum – shared behaviour.
   1. Builds the header and footer from data/site.js (single source for every page).
   2. Theme toggle (light default, choice remembered).
   3. Renders data-driven blocks: any element with data-render="<name>" is filled by RENDERERS[name].
   To add a new block type: add a function to RENDERERS and put <div data-render="name"></div> in a page.
   Data lives in /data as plain .js files (not JSON) so pages also work when opened straight from a folder. */
(function () {
  "use strict";
  var SITE = window.CSI_SITE || {}, DATA = window.CSI_CONTENT || {};
  var doc = document, root = doc.documentElement;
  /* The 404 page can be served from any folder depth, so it sets <meta name="site-root" content="/"> and all links get that prefix. */
  var rm = doc.querySelector('meta[name="site-root"]'), R = rm ? rm.content : "";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  /* Only http(s), mailto, tel and relative URLs are allowed in data-driven links. Anything else (e.g. javascript:) becomes "#". */
  function safe(url) {
    var u = String(url == null ? "" : url).trim();
    return /^(https?:|mailto:|tel:)/i.test(u) || !/^[a-z][a-z0-9+.-]*:/i.test(u) ? u : "#";
  }
  function ext(href) { return /^https?:/i.test(String(href).trim()) ? ' target="_blank" rel="noopener noreferrer"' : ""; }
  function page() { var p = location.pathname.split("/").pop(); return p || "index.html"; }

  /* ---------- Header and footer ---------- */
  function buildHeader() {
    var el = doc.getElementById("site-header");
    if (!el) return;
    var cur = page();
    var links = (SITE.nav || []).map(function (n) {
      return '<a href="' + R + esc(safe(n.href)) + '"' + (n.href === cur ? ' aria-current="page"' : "") + ">" + esc(n.label) + "</a>";
    }).join("");
    el.innerHTML =
      '<header class="site"><div class="wrap bar">' +
      '<a class="brand" href="' + R + 'index.html"><img src="' + R + esc(safe(SITE.logo)) + '" width="200" height="47" alt="' + esc(SITE.name) + '"></a>' +
      '<button class="menu-btn" id="menu-btn" type="button" aria-expanded="false" aria-controls="main-nav">Menu</button>' +
      '<nav class="main" id="main-nav" aria-label="Main">' + links +
      '<button class="theme" id="theme" type="button" aria-label="Switch to dark theme"><span aria-hidden="true" id="ticon">☾</span><span id="tlabel">Dark</span></button>' +
      "</nav></div></header>";
    var btn = doc.getElementById("menu-btn"), nav = doc.getElementById("main-nav");
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.focus(); }
    });
    initTheme();
  }

  function buildFooter() {
    var el = doc.getElementById("site-footer");
    if (!el) return;
    var c = SITE.contact || {};
    var list = function (arr) {
      return "<ul>" + (arr || []).map(function (x) { return '<li><a href="' + esc(safe(x.href)) + '"' + ext(x.href) + ">" + esc(x.label) + "</a></li>"; }).join("") + "</ul>";
    };
    el.innerHTML =
      '<footer class="site"><div class="wrap foot">' +
      "<div><h3>" + esc(SITE.name) + "</h3><p>" + (c.addressLines || []).map(esc).join("<br>") + "</p></div>" +
      "<div><h3>Contact</h3><ul><li>Phone: <a href=\"tel:" + esc(c.phone) + '">' + esc(c.phone) + "</a></li>" +
      '<li>Email: <a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a></li>" +
      '<li><a href="' + R + 'contact.html">Contact page and directions</a></li></ul></div>' +
      "<div><h3>Follow</h3>" + list(SITE.social) + "</div>" +
      "<div><h3>Related sites</h3>" + list(SITE.related) + "</div></div>" +
      '<div class="wrap legal">© ' + new Date().getFullYear() + " " + esc(SITE.name) + ".</div></footer>";
  }

  /* ---------- Theme ---------- */
  function initTheme() {
    var btn = doc.getElementById("theme");
    if (!btn) return;
    function paint() {
      var d = root.getAttribute("data-theme") === "dark";
      btn.setAttribute("aria-label", d ? "Switch to light theme" : "Switch to dark theme");
      doc.getElementById("ticon").textContent = d ? "☀" : "☾";
      doc.getElementById("tlabel").textContent = d ? "Light" : "Dark";
    }
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("csitvm-theme", next); } catch (e) { /* ignore */ }
      paint();
    });
    paint();
  }

  /* ---------- Data-driven blocks ---------- */
  function eventCard(ev) {
    return '<article class="card"><figure class="figure"><img src="' + esc(safe(ev.image)) + '" alt="' + esc(ev.alt) + '" loading="lazy">' +
      "</figure>" +
      /* Optional second picture (e.g. a photo of the session): set image2, alt2 and caption2 in data/content.js */
      (ev.image2 ? '<figure class="figure mt-12"><img src="' + esc(safe(ev.image2)) + '" alt="' + esc(ev.alt2) + '" loading="lazy">' +
        (ev.caption2 ? "<figcaption>" + esc(ev.caption2) + "</figcaption>" : "") + "</figure>" : "") +
      "<h3 class=\"mt-12\">" + esc(ev.title) + "</h3><p><b>" + esc(ev.date) + "</b></p>" +
      '<div class="pills">' + (ev.tags || []).map(function (t) { return '<span class="pill">' + esc(t) + "</span>"; }).join("") + "</div>" +
      "<p>" + esc(ev.text) + "</p></article>";
  }
  function fileList(items) {
    return '<ul class="list">' + items.map(function (f) {
      return '<li><span>' + esc(f.title) + '</span><a class="btn" href="' + esc(safe(f.file)) + '" target="_blank" rel="noopener" aria-label="Open ' + esc(f.title) + ' (PDF)">Open PDF</a></li>';
    }).join("") + "</ul>";
  }

  var RENDERERS = {
    forms: function (el) { el.innerHTML = fileList(DATA.forms || []); },
    newsletters: function (el) { el.innerHTML = fileList(DATA.newsletters || []); },
    events: function (el) {
      var n = parseInt(el.getAttribute("data-limit"), 10) || 99;
      el.className = "grid wide";
      el.innerHTML = (DATA.events || []).slice(0, n).map(eventCard).join("");
    },
    "event-series": function (el) {
      el.className = "grid";
      el.innerHTML = (DATA.eventSeries || []).map(function (s) {
        var body = s.items && s.items.length
          ? "<ul>" + s.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>"
          : '<p class="empty">No entries have been published yet.</p>';
        return '<div class="card"><h3>' + esc(s.title) + "</h3>" + body + "</div>";
      }).join("");
    },
    "student-chapters": function (el) {
      el.className = "grid fit";
      el.innerHTML = (DATA.studentChapters || []).map(function (s) {
        /* No website known yet: show the college as a plain tile without a link */
        if (!s.href) {
          return '<div class="card"><span class="pill">' + esc(s.label || "CSI Student Chapter") + '</span><h3 class="mt-12">' + esc(s.college) + "</h3>" +
            '<p class="empty">' + esc(s.note || "Website not listed yet") + "</p></div>";
        }
        var host = String(s.href).replace(/^https?:\/\//i, "").split("/")[0];
        return '<a class="card link" href="' + esc(safe(s.href)) + '"' + ext(s.href) + ' aria-label="' + esc(s.college) + ' website (opens in a new tab)">' +
          '<span class="pill">' + esc(s.label || "CSI Student Chapter") + '</span><h3 class="mt-12">' + esc(s.college) + "</h3>" +
          "<p>" + esc(s.note || host) + '</p><span class="go">Visit website →</span></a>';
      }).join("");
    },
    awards: function (el) {
      el.className = "grid";
      el.innerHTML = (DATA.awards || []).map(function (a) {
        return '<a class="card link" href="' + esc(safe(a.href)) + '"' + ext(a.href) + "><h3>" + esc(a.title) + "</h3><p>" + esc(a.text) + '</p><span class="go">Visit site →</span></a>';
      }).join("");
    },
    contact: function (el) {
      var c = SITE.contact || {};
      el.innerHTML = '<div class="card"><h3>Address</h3><p>' + (c.addressLines || []).map(esc).join("<br>") + "</p>" +
        '<p><a href="' + esc(safe(c.mapUrl)) + '" target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p></div>' +
        '<div class="card"><h3>Phone and email</h3><p>Phone: <a href="tel:' + esc(c.phone) + '">' + esc(c.phone) + "</a><br>Email: " +
        '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a></p></div>" +
        '<div class="card"><h3>Find us online</h3><ul>' + (SITE.social || []).map(function (s) {
          return '<li><a href="' + esc(safe(s.href)) + '"' + ext(s.href) + ">" + esc(s.label) + "</a></li>";
        }).join("") + "</ul></div>";
    },
    "current-committee": function (el) {
      var cc = window.CSI_CURRENT_COMMITTEE;
      if (!cc) { el.innerHTML = '<p class="empty">The current committee will be published here.</p>'; return; }
      el.innerHTML = '<p class="lead">Term ' + esc(cc.term) + '</p><div class="grid">' + cc.members.map(function (m) {
        return '<div class="card"><span class="pill">' + esc(m.role) + '</span><h3 class="mt-12">' + esc(m.name) + '</h3></div>';
      }).join("") + "</div>";
    },
    "office-bearers": function (el) {
      var rows = (window.CSI_OFFICE_BEARERS || []).slice().reverse(); /* newest first */
      el.innerHTML =
        '<div class="toolbar"><div class="search"><label class="lbl" for="ob-q">Search by name or year</label>' +
        '<input class="find" id="ob-q" type="search" placeholder="For example: Satish Babu or 1992" autocomplete="off"></div>' +
        '<p class="count" id="ob-count" role="status"></p></div>' +
        '<div class="tbl"><table><caption class="tbl-cap">Chapter office bearers by year, newest first</caption><thead><tr><th scope="col">Year</th><th scope="col">Chairman</th><th scope="col">Vice Chairman</th><th scope="col">Secretary</th><th scope="col">Treasurer</th><th scope="col">Editor</th></tr></thead><tbody id="ob-body"></tbody></table></div>';
      var q = doc.getElementById("ob-q"), body = doc.getElementById("ob-body"), count = doc.getElementById("ob-count");
      function draw() {
        var t = q.value.trim().toLowerCase();
        var list = rows.filter(function (r) { return !t || r.join(" ").toLowerCase().indexOf(t) > -1; });
        body.innerHTML = list.map(function (r) {
          return '<tr><td class="yr">' + esc(r[0]) + "</td>" + r.slice(1).map(function (c) { return "<td>" + (c ? esc(c) : "—") + "</td>"; }).join("") + "</tr>";
        }).join("");
        count.textContent = list.length ? "Showing " + list.length + " of " + rows.length + " terms." : "No terms match your search.";
      }
      q.addEventListener("input", draw);
      draw();
    }
  };

  function renderAll() {
    var nodes = doc.querySelectorAll("[data-render]");
    for (var i = 0; i < nodes.length; i++) {
      var fn = RENDERERS[nodes[i].getAttribute("data-render")];
      if (fn) fn(nodes[i]);
    }
  }

  buildHeader();
  buildFooter();
  renderAll();
})();
