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
    photos: [
      { src: "reception-head-table.jpg", alt: "Reception under string lights among the trees, with carved wooden screens behind the head table" },
      { src: "table-setting.jpg", alt: "Long wooden tables with white gauze runners, peach and white bouquets, light blue napkins and a table number card" },
      { src: "head-table-florals.jpg", alt: "Head table centerpiece of lilies, hydrangeas and dahlias in a brass bowl on a sage green runner" },
      { src: "seating-chart.jpg", alt: "Find your seat chart in an ornate gold frame, flanked by brass vases of white orchids" },
      { src: "ganesha-welcome.jpg", alt: "Brass Ganesha decorated with jasmine and red hibiscus between two brass lamps" },
      { src: "memory-table.jpg", alt: "Outdoor memory table of framed family photos with gold vases of white and yellow flowers" },
      { src: "ceremony-mandap.jpg", alt: "Ceremony stage with carved wooden screens strung with jasmine and roses, brass lamps and white orchids" },
      { src: "ancestor-portraits.jpg", alt: "Framed portraits of family elders draped in flower garlands on a table with gold fabric and brass diyas" }
    ]
  }
];
