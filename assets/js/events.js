/*
  Events portfolio. Each event renders as a section on events.html.

  Adding photos: put image files in images/events/<id>/ and list their file
  names in `photos` (the first one is shown largest). Add a short `alt`
  description for each so the page stays accessible, e.g.
    photos: [ { src: "ceremony.jpg", alt: "Ceremony arch with marigolds" } ]

  Empty fields (date, location, guests) are simply hidden.
*/
window.EVENTS = [
  {
    id: "wedding",
    title: "Our wedding",
    type: "Wedding",
    date: "",
    location: "",
    guests: "",
    role: "Planner, designer and coordinator, and also the bride",
    summary: "The first event I planned from start to finish was my own wedding. I owned the budget, the timeline, every vendor and the design, and built the day-of schedule so our families could simply enjoy it.",
    scope: [
      "Budget and planning timeline",
      "Venue and vendor selection",
      "Design, décor and stationery",
      "Guest list and RSVPs",
      "Day-of schedule and run of show",
      "Coordination with family and vendors"
    ],
    photos: []
  }
];
