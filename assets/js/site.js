/* Shared header, footer and navigation.
   Each page sets <body data-root="" data-section="data|travel|events|home" data-page="...">.
   data-root is the relative path back to the site root ("" or "../"). */
(function () {
  var body = document.body;
  var root = body.getAttribute("data-root") || "";
  var section = body.getAttribute("data-section") || "home";
  var page = body.getAttribute("data-page") || "";
  var trips = window.TRIPS || [];

  var EMAIL = "poonamvkrish@gmail.com";
  var LINKS = {
    linkedin: "https://www.linkedin.com/in/poonam-varkhedi/",
    github: "https://github.com/pvarkhedi",
    medium: "https://medium.com/@poonamvarkhedi"
  };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var tripLinks = trips.map(function (t) {
    var cur = page === "trip-" + t.slug ? ' aria-current="page"' : "";
    return '<a href="' + root + "travel/" + t.slug + '.html"' + cur + ">" + esc(t.title) + "</a>";
  }).join("");

  function cur(name) { return section === name ? ' aria-current="page"' : ""; }

  var header =
    '<a class="skip" href="#main">Skip to content</a>' +
    '<header class="site-header"><div class="wrap">' +
      '<div class="header-top">' +
        '<div class="social">' +
          '<a href="' + LINKS.linkedin + '" aria-label="LinkedIn"><svg viewBox="0 0 16 16"><circle cx="2.6" cy="2.6" r="1.8"/><rect x="1" y="5.6" width="3.2" height="9.4"/><path d="M6 5.6h3v1.3c.4-.8 1.5-1.5 3-1.5 3.1 0 3.6 2 3.6 4.6V15h-3.1v-4.4c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V15H6z"/></svg></a>' +
          '<a href="' + LINKS.github + '" aria-label="GitHub"><svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>' +
          '<a href="' + LINKS.medium + '" aria-label="Medium"><svg viewBox="0 0 17 9"><circle cx="4.5" cy="4.5" r="4.5"/><ellipse cx="11.6" cy="4.5" rx="2.2" ry="4.3"/><ellipse cx="15.6" cy="4.5" rx=".8" ry="3.9"/></svg></a>' +
        "</div>" +
        '<a class="wordmark" href="' + root + 'index.html" aria-label="Poonam Varkhedi Krish, home"><span class="name">Poonam Varkhedi Krish</span><span class="sig" aria-hidden="true">portfolio</span></a>' +
        '<div class="header-cta"><a class="btn" href="mailto:' + EMAIL + '">Say hello</a></div>' +
        '<button class="menu-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
      "</div>" +
      '<nav class="nav" id="site-nav" aria-label="Main">' +
        '<a href="' + root + 'index.html"' + cur("home") + ">Home</a>" +
        '<a href="' + root + 'data-science.html"' + cur("data") + ">Data science</a>" +
        '<div class="has-sub' + (section === "travel" ? " current" : "") + '">' +
          '<button aria-expanded="false" aria-haspopup="true">Travel</button>' +
          '<div class="submenu">' +
            '<a href="' + root + 'travel/index.html"' + (page === "travel-index" ? ' aria-current="page"' : "") + ">All trips</a>" +
            tripLinks +
          "</div>" +
        "</div>" +
        '<a href="' + root + 'events.html"' + cur("events") + ">Events</a>" +
        '<a href="' + root + 'index.html#about">About</a>' +
      "</nav>" +
    "</div></header>";

  var footer =
    '<footer class="site-footer"><div class="wrap footer-row">' +
      '<span class="copy">&copy; ' + new Date().getFullYear() + " Poonam Varkhedi</span>" +
      '<nav aria-label="Contact and profiles">' +
        '<a href="mailto:' + EMAIL + '">' + EMAIL + "</a>" +
        '<a href="' + LINKS.linkedin + '">LinkedIn</a>' +
        '<a href="' + LINKS.github + '">GitHub</a>' +
        '<a href="' + LINKS.medium + '">Medium</a>' +
      "</nav>" +
    "</div></footer>";


  body.insertAdjacentHTML("afterbegin", header);
  body.insertAdjacentHTML("beforeend", footer);

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.textContent = open ? "Close" : "Menu";
  });

  // Travel submenu
  var sub = document.querySelector(".has-sub");
  var subBtn = sub.querySelector("button");
  function setSub(open) { sub.classList.toggle("open", open); subBtn.setAttribute("aria-expanded", open); }
  var hoverOpenedAt = 0;
  var desktopHover = function () { return window.matchMedia("(hover: hover) and (min-width: 821px)").matches; };
  subBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    // A click right after hover-open shouldn't close the menu again
    if (sub.classList.contains("open") && Date.now() - hoverOpenedAt < 700) return;
    setSub(!sub.classList.contains("open"));
  });
  sub.addEventListener("mouseenter", function () { if (desktopHover() && !sub.classList.contains("open")) { hoverOpenedAt = Date.now(); setSub(true); } });
  sub.addEventListener("mouseleave", function () { if (desktopHover()) setSub(false); });
  document.addEventListener("click", function (e) { if (!sub.contains(e.target)) setSub(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && sub.classList.contains("open")) { setSub(false); subBtn.focus(); } });

  function setHeaderH() { document.documentElement.style.setProperty("--header-h", document.querySelector(".site-header").offsetHeight + "px"); }
  setHeaderH(); window.addEventListener("resize", setHeaderH);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setHeaderH);

  window.SITE = { root: root, esc: esc, email: EMAIL, links: LINKS };
})();
