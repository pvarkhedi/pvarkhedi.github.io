/*
  Trip registry. Every trip listed here shows up in the Travel menu and on
  the Travel page. To add a trip:
    1. Copy travel/costa-rica.html to travel/<slug>.html and change the
       data file it loads.
    2. Copy travel/data/costa-rica.js to travel/data/<slug>.js and fill it in.
    3. Add an entry below.
*/
window.TRIPS = [
  {
    slug: "costa-rica",
    title: "Costa Rica",
    blurb: "Volcanoes, cloud forest and a day at the beach",
    length: "8 days, 7 nights",
    when: "Oct 31 – Nov 7, 2026",
    route: "La Fortuna, Monteverde, Guanacaste",
    group: "5 travelers"
  }
];
