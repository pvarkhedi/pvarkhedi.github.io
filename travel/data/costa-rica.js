/*
  Costa Rica itinerary. Everything on travel/costa-rica.html is rendered from
  this file, so edit here to change the page.

  Fields
    days[].slots[]   time, title, note, links: [{label, url}]
    days[].bring     what to pack that day
    days[].slots[].price   cost per person in USD (0 shows as Free), optional priceNote;
                     optional: true leaves it out of the day's total
    budget.actual    what the group actually spent, by category (USD)
*/
window.TRIP = {
  slug: "costa-rica",
  title: "Costa Rica in 8 days",
  lede: "Hanging bridges and hot springs around Arenal Volcano, ziplining and night walks in the Monteverde cloud forest, and a last day on the Pacific coast. This is the exact plan we followed, with what it cost.",
  dates: "Oct 31 – Nov 7, 2026",
  group: 5,
  currency: "USD",

  route: [
    { name: "San José", note: "Arrive" },
    { name: "La Fortuna", note: "3 nights" },
    { name: "Monteverde", note: "3 nights" },
    { name: "Playa Hermosa", note: "Beach day" },
    { name: "Airport", note: "1 night, fly home" }
  ],

  days: [
    {
      n: 1, date: "Sat, Oct 31", place: "San José to La Fortuna", travel: true,
      title: "Land and head to Arenal",
      slots: [
        { time: "Arrival", title: "Land in San José", note: "Private car transfer straight to the resort in La Fortuna.", links: [{ label: "Ruta Pacífico transfers", url: "https://rutapacifico.com/about-contact" }] },
        { time: "Evening", title: "Check in at Lost Iguana Resort", note: "Home base for the next 3 nights. Breakfast is included." }
      ]
    },
    {
      n: 2, date: "Sun, Nov 1", place: "La Fortuna",
      title: "Bridges, lava fields and a rope swing",
      slots: [
        { time: "Morning", title: "Breakfast at the hotel" },
        { time: "Morning", title: "Mistico Hanging Bridges", price: 53, note: "Walkable from the Lost Iguana. We booked this one ahead of time.", links: [{ label: "Mistico Park", url: "https://misticopark.com/" }, { label: "Map", url: "https://www.google.com/maps/search/?api=1&query=Mistico+Arenal+Hanging+Bridges+Park" }] },
        { time: "Midday", title: "Arenal Volcano lava fields hike", price: 15, priceNote: "+ tax", note: "Easy to do on your own, no guide needed. The national park gate takes cards only, and no reservation is needed." },
        { time: "Lunch", title: "Lunch in downtown La Fortuna" },
        { time: "Optional", title: "La Fortuna Waterfall", optional: true, price: 20, note: "This one is optional, since it requires a taxi ride, a $20 entry fee, and a climb of about 500 steps down and back up. El Salto is a great free substitute.", links: [{ label: "Map", url: "https://www.google.com/maps/search/?api=1&query=La+Fortuna+Waterfall" }] },
        { time: "Afternoon", title: "El Salto rope swing", price: 0, note: "Walkable from downtown La Fortuna. From the Lost Iguana we took a taxi, about $44 each way for our group.", links: [{ label: "Map", url: "https://www.google.com/maps/search/?api=1&query=El+Salto+La+Fortuna+Costa+Rica" }] },
        { time: "Dinner", title: "Dinner in downtown La Fortuna", note: "An easy walk from El Salto." }
      ],
      bring: "Walking shoes, binoculars and sunglasses for the morning. Water shoes, a swimsuit and a towel for the rope swing and waterfall."
    },
    {
      n: 3, date: "Mon, Nov 2", place: "La Fortuna",
      title: "Rafting and rappelling",
      slots: [
        { time: "All day", title: "Mambo Combo tour with Desafío", price: 200, note: "Whitewater rafting and canyon rappelling, with breakfast and lunch included. Desafío runs a few combo versions with different activities.", links: [{ label: "Desafío tours", url: "https://www.desafiocostarica.com/shop/" }, { label: "Watch a video", url: "https://www.youtube.com/watch?v=YrqR0g5rntI" }] },
        { time: "Dinner", title: "Dinner at the hotel" }
      ],
      bring: "Water shoes, a change of clothes and a water bottle. Towels are provided, and you don't need a swimsuit."
    },
    {
      n: 4, date: "Tue, Nov 3", place: "La Fortuna to Monteverde",
      title: "Hot springs, then up to the cloud forest",
      slots: [
        { time: "Morning", title: "Breakfast at the hotel" },
        { time: "10am – 4pm", title: "EcoTermales hot springs", price: 81, note: "Natural hot spring pools with a Costa Rican lunch included. A taxi each way was about $44.", links: [{ label: "EcoTermales", url: "https://ecotermalesfortuna.cr/" }, { label: "Watch a video", url: "https://youtube.com/shorts/XLwZB3Lx1vQ" }] },
        { time: "Evening", title: "Dinner in town, then transfer to Monteverde", note: "Private car to Hotel El Establo Mountain Hotel, home for the next 3 nights.", links: [{ label: "Ruta Pacífico transfers", url: "https://rutapacifico.com/about-contact" }] }
      ],
      bring: "Flip flops, sunglasses, a swimsuit and a water bottle. Towels and lunch are included."
    },
    {
      n: 5, date: "Wed, Nov 4", place: "Monteverde",
      title: "Cloud forest, coffee and a night walk",
      slots: [
        { time: "Morning", title: "Breakfast at Taty's Bakery near the hotel", links: [{ label: "Taty's Bakery map", url: "https://maps.app.goo.gl/9PXw3LkSW8ZAe7L47" }] },
        { time: "Morning", title: "Curi Cancha Reserve or the Monteverde Cloud Forest Reserve", price: 25, priceNote: "approx.", note: "Self-guided. A spa morning at the hotel is the low-key alternative.", links: [{ label: "Curi Cancha map", url: "https://www.google.com/maps/search/?api=1&query=Reserva+Curi+Cancha+Monteverde" }] },
        { time: "Lunch", title: "Lunch in town" },
        { time: "4pm – 8pm", title: "Don Juan coffee, chocolate and sugar cane tour + night walk", price: 70, note: "A two-hour farm tour at 4pm, then a two-hour guided night walk at 6pm.", links: [{ label: "Don Juan Tours", url: "https://donjuantoursmonteverde.com/en/tours/915-coffee-tour-chocolate-tour-and-night-walk-tour.html" }] },
        { time: "Dinner", title: "Dinner at a restaurant near the hotel" }
      ],
      bring: "Closed-toe walking shoes, long pants (seriously, for the night walk) and a rain jacket."
    },
    {
      n: 6, date: "Thu, Nov 5", place: "Monteverde",
      title: "Ziplines and hanging bridges at Selvatura",
      slots: [
        { time: "Morning", title: "Breakfast at Taty's Bakery near the hotel", links: [{ label: "Taty's Bakery map", url: "https://maps.app.goo.gl/9PXw3LkSW8ZAe7L47" }] },
        { time: "All day", title: "Selvatura Park all-day pack", price: 229, note: "Ziplining, hanging bridges, the butterfly garden, a sloth habitat and the reptile and amphibian exhibit. Lunch at the park.", links: [{ label: "Selvatura all-day pack", url: "https://www.selvatura.com/packages/all-day-pack/" }, { label: "Watch a video", url: "https://youtube.com/shorts/c4qt-lSHXUw" }] },
        { time: "Dinner", title: "Dinner at a restaurant near the hotel" }
      ],
      bring: "Walking shoes and sunglasses."
    },
    {
      n: 7, date: "Fri, Nov 6", place: "Monteverde to Guanacaste", travel: true,
      title: "Down to the beach",
      slots: [
        { time: "Morning", title: "Breakfast at Taty's Bakery near the hotel", links: [{ label: "Taty's Bakery map", url: "https://maps.app.goo.gl/9PXw3LkSW8ZAe7L47" }] },
        { time: "Morning", title: "Private car transfer to Playa Hermosa, Guanacaste", note: "On the way, the driver stops at the airport hotel so you can leave your luggage there for the day. The road down from Monteverde is winding, so take motion sickness tablets before you leave.", links: [{ label: "Ruta Pacífico transfers", url: "https://rutapacifico.com/about-contact" }] },
        { time: "Midday", title: "Beach day", note: "Grab a meal in the beach town and spend the afternoon by the water." },
        { time: "Evening", title: "Uber to a hotel near the airport", note: "One night close to the airport makes the flight home easy." }
      ],
      bring: "One bag with everything for the day: flip flops, sunglasses, swimsuit, towel, water bottle and a change of clothes. Your luggage won't be with you."
    },
    {
      n: 8, date: "Sat, Nov 7", place: "Fly home", travel: true,
      title: "Head to the airport",
      slots: [
        { time: "Morning", title: "Transfer to the airport and fly home" }
      ]
    }
  ],

  hotels: [
    {
      area: "La Fortuna, near Arenal Volcano",
      name: "Lost Iguana Resort",
      nights: "3 nights (Oct 31 – Nov 3)",
      rooms: "2 rooms",
      includes: "Breakfast",
      cost: 1362.75,
      note: "It's a bit farther from downtown La Fortuna, but it's a one-of-a-kind hotel set right in the rainforest, and absolutely worth staying at.",
      map: "https://www.google.com/maps/search/?api=1&query=Lost+Iguana+Resort+Arenal"
    },
    {
      area: "Monteverde cloud forest",
      name: "Hotel El Establo Mountain Hotel",
      nights: "3 nights (Nov 3 – Nov 6)",
      rooms: "1 family suite (king, queen and twin)",
      includes: "Room only; breakfast is extra",
      cost: 1277.97,
      map: "https://www.google.com/maps/search/?api=1&query=Hotel+El+Establo+Monteverde"
    },
    {
      area: "Near the airport",
      name: "Airport hotel",
      nights: "1 night (Nov 6 – Nov 7)",
      rooms: "Booked for the whole group",
      includes: "A short ride to the terminal",
      cost: 318.04
    }
  ],

  budget: {
    note: "What our group of 5 actually spent, not counting flights or shopping before the trip.",
    actual: [
      { label: "Hotels", detail: "7 nights across 3 hotels", amount: 2958.76 },
      { label: "Tours and activities", detail: "Mistico, Mambo Combo, EcoTermales, Selvatura, Don Juan", amount: 3166.12 },
      { label: "Private transfers and rides", detail: "3 private car transfers plus airport rides", amount: 893.96 },
      { label: "Food, taxis and extras", detail: "Meals, local taxis, markets, tour photos", amount: 2298.00 }
    ],
    flights: "Round-trip flights ran about $600 to $1,130 per person, depending on where you fly from."
  },

  packing: [
    "Closed-toe walking shoes",
    "Water shoes",
    "Flip flops",
    "Long pants",
    "Rain jacket or poncho",
    "Swimsuit",
    "Quick-dry towel",
    "Binoculars",
    "Sunglasses",
    "Reusable water bottle",
    "Bug spray",
    "Motion sickness tablets",
    "Change of clothes for tour days",
    "Day bag",
    "Some cash in small bills"
  ],

  tips: [
    { title: "Book the big tours ahead", text: "Mistico, the Mambo Combo and Selvatura can fill up. The volcano lava fields and the reserves are easy to do on your own." },
    { title: "Budget for taxis in La Fortuna", text: "From the Lost Iguana, a taxi to the rope swing or the hot springs was about $44 each way for our group. The rope swing is walkable from downtown." },
    { title: "Tour photos cost extra", text: "Desafío and Selvatura both sell photo packages, about $75 to $85. Worth it for rafting, when your phone is put away." },
    { title: "Monteverde is cool and wet", text: "Pack long pants and a rain layer. Wear closed-toe shoes and long pants for the Don Juan night walk." },
    { title: "Carry some cash", text: "Small markets and some taxis are cash only. We brought about $240." },
    { title: "Plan the beach day around your bags", text: "On the way to the beach, drop your luggage at the airport hotel, and pack one day bag with everything you need until you're back that evening." }
  ]
};
