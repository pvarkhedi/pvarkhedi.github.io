/* Renders a trip page from window.TRIP (see travel/data/*.js). */
(function () {
  var T = window.TRIP;
  if (!T) return;
  var esc = window.SITE.esc;
  var $ = function (id) { return document.getElementById(id); };
  var money = function (n, cents) {
    return "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0 });
  };

  document.title = T.title + " | Poonam Varkhedi";

  // ---------- Hero ----------
  var total = T.budget.actual.reduce(function (s, r) { return s + r.amount; }, 0);
  var perPerson = total / T.group;
  $("trip-title").textContent = T.title;
  $("trip-lede").textContent = T.lede;
  $("trip-stats").innerHTML =
    "<div><b>" + T.days.length + " days</b><span>" + esc(T.dates) + "</span></div>" +
    "<div><b>" + T.hotels.length + " hotels</b><span>" + (T.route.length - 2) + " regions</span></div>" +
    "<div><b>" + T.group + " travelers</b><span>Our group size</span></div>" +
    "<div><b>~" + money(Math.round(perPerson / 10) * 10) + "</b><span>Per person: hotels, activities, food and transport</span></div>";

  // ---------- Route ----------
  var route = $("trip-route");
  route.style.setProperty("--stops", T.route.length);
  route.innerHTML = T.route.map(function (r) {
    return '<li><div class="pin" aria-hidden="true"></div><div><b>' + esc(r.name) + "</b><span>" + esc(r.note) + "</span></div></li>";
  }).join("");

  // ---------- Days ----------
  function dayTotal(d) { return d.slots.reduce(function (t, s) { return t + (s.optional ? 0 : (s.price || 0)); }, 0); }
  $("trip-days").innerHTML = T.days.map(function (d) {
    var slots = d.slots.map(function (s) {
      var links = (s.links || []).map(function (l) { return '<a href="' + esc(l.url) + '">' + esc(l.label) + "</a>"; }).join("");
      var price = s.price === undefined ? "" : '<span class="price">' + (s.price === 0 ? "Free" : (s.priceNote === "approx." ? "~" : "") + money(s.price) + (s.priceNote && s.priceNote !== "approx." ? " " + esc(s.priceNote) : "") + " per person") + "</span>";
      return '<li><span class="t">' + esc(s.time) + '</span><div class="what"><b>' + esc(s.title) + "</b>" + price +
        (s.note ? "<p>" + esc(s.note) + "</p>" : "") +
        (links ? '<span class="ln">' + links + "</span>" : "") + "</div></li>";
    }).join("");
    return '<li class="day' + (d.travel ? " travel-day" : "") + '" id="day-' + d.n + '">' +
      '<div class="when"><span class="n">Day ' + d.n + '</span><span class="d">' + esc(d.date) + '</span><span class="place">' + esc(d.place) + "</span></div>" +
      "<div><h3>" + esc(d.title) + '</h3><ul class="slots">' + slots + "</ul>" +
      (d.bring ? '<p class="bring"><b>Bring</b>' + esc(d.bring) + "</p>" : "") +
      (dayTotal(d) ? '<p class="day-cost">Activities today: ' + (d.slots.some(function (s) { return s.priceNote && !s.optional; }) ? "about " : "") + money(dayTotal(d)) + " per person</p>" : "") +
      "</div></li>";
  }).join("");

  // ---------- Hotels ----------
  $("trip-hotels").innerHTML = T.hotels.map(function (h) {
    return '<article class="hotel"><p class="area">' + esc(h.area) + "</p><h3>" + esc(h.name) + "</h3><dl>" +
      "<dt>Stay</dt><dd>" + esc(h.nights) + "</dd>" +
      "<dt>Rooms</dt><dd>" + esc(h.rooms) + "</dd>" +
      "<dt>Includes</dt><dd>" + esc(h.includes) + "</dd>" +
      "<dt>We paid</dt><dd>" + money(h.cost) + " total</dd></dl>" +
      (h.note ? '<p class="hotel-note">' + esc(h.note) + "</p>" : "") +
      (h.map ? '<a class="map" href="' + esc(h.map) + '">See it on the map</a>' : "") + "</article>";
  }).join("");

  // ---------- Budget ----------
  var max = Math.max.apply(null, T.budget.actual.map(function (r) { return r.amount; }));
  $("budget-note").textContent = T.budget.note;
  $("budget-table").innerHTML =
    '<thead><tr><th>Category</th><th class="num">Group total</th><th class="num">Per person</th></tr></thead><tbody>' +
    T.budget.actual.map(function (r) {
      return "<tr><td>" + esc(r.label) + "<small>" + esc(r.detail) + '</small></td><td class="num">' + money(r.amount) + '</td><td class="num">' + money(r.amount / T.group) + "</td></tr>";
    }).join("") +
    '</tbody><tfoot><tr><td>Total</td><td class="num">' + money(total) + '</td><td class="num">' + money(perPerson) + "</td></tr></tfoot>";
  $("budget-bars").innerHTML = T.budget.actual.map(function (r) {
    return '<li><div class="row">' + esc(r.label) + "<span>" + Math.round((r.amount / total) * 100) + '%</span></div><div class="track"><div class="fill" style="width:' + ((r.amount / max) * 100).toFixed(1) + '%"></div></div></li>';
  }).join("");
  $("budget-pp").innerHTML = "<b>" + money(perPerson) + "</b>per person for " + T.days.length + " days, all in: hotels, activities, food and transportation. Flights are not included. " + esc(T.budget.flights);

  // ---------- Packing (checkboxes remembered in this browser) ----------
  var key = "packing-" + T.slug, saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) {}
  var pack = $("trip-packing");
  pack.innerHTML = T.packing.map(function (p, i) {
    return '<li><label><input type="checkbox" data-i="' + i + '"' + (saved[i] ? " checked" : "") + "> " + esc(p) + "</label></li>";
  }).join("");
  pack.addEventListener("change", function (e) {
    if (!e.target.dataset) return;
    saved[e.target.dataset.i] = e.target.checked;
    try { localStorage.setItem(key, JSON.stringify(saved)); } catch (err) {}
  });

  // ---------- Tips & links ----------
  $("trip-tips").innerHTML = T.tips.map(function (t) { return "<li><b>" + esc(t.title) + "</b>" + esc(t.text) + "</li>"; }).join("");
  var seen = {}, links = [];
  T.days.forEach(function (d) {
    d.slots.forEach(function (s) {
      (s.links || []).forEach(function (l) {
        if (/map|video/i.test(l.label) || seen[l.url]) return;
        seen[l.url] = 1; links.push({ label: l.label, sub: "Day " + d.n + ": " + s.title, url: l.url });
      });
    });
  });
  $("trip-links").innerHTML = links.map(function (l) {
    return '<li><a href="' + esc(l.url) + '"><b>' + esc(l.label) + "</b><span>" + esc(l.sub) + "</span></a></li>";
  }).join("");

  // ---------- Copy link ----------
  var toast = document.createElement("div");
  toast.className = "toast"; toast.setAttribute("role", "status");
  document.body.appendChild(toast);
  $("copy-link").addEventListener("click", function () {
    function done(msg) { toast.textContent = msg; toast.classList.add("show"); setTimeout(function () { toast.classList.remove("show"); }, 2200); }
    var url = location.href.split("#")[0];
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(function () { done("Link copied"); }, function () { done(url); });
    else done(url);
  });

  // ---------- Highlight current tab ----------
  var tabs = [].slice.call(document.querySelectorAll(".trip-tabs a[href^='#']"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) tabs.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    tabs.forEach(function (a) { var s = document.querySelector(a.getAttribute("href")); if (s) io.observe(s); });
  }
})();
