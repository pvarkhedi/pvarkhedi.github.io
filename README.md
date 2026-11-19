# pvarkhedi.github.io

Personal site for Poonam Varkhedi, with three sections: data science, travel itineraries and events.
It's plain HTML, CSS and JavaScript with no build step, so GitHub Pages serves it as-is.

```
index.html              Home
data-science.html       Featured Oscars study + all other projects
travel/index.html       List of trips
travel/costa-rica.html  Costa Rica itinerary (rendered from travel/data/costa-rica.js)
events.html             Events portfolio (rendered from assets/js/events.js)
assets/css/site.css     All styles
assets/js/site.js       Shared header, footer and menus
assets/js/trips.js      Trip list that feeds the Travel menu and the Travel page
assets/js/trip.js       Renders any trip page from its data file
docs/                   PDFs (Oscars report, Wikipedia paper)
images/                 Project thumbnails and event photos
```

## Common edits

**Change the Costa Rica plan:** edit `travel/data/costa-rica.js`. The schedule, hotels, budget,
packing list, tips and booking links on the page all come from that file.

**Add a new trip**
1. Copy `travel/data/costa-rica.js` to `travel/data/<slug>.js` and fill it in.
2. Copy `travel/costa-rica.html` to `travel/<slug>.html` and change
   `data/costa-rica.js` to `data/<slug>.js` near the bottom. Update the title and description tags too.
3. Add the trip to `assets/js/trips.js`. It then appears in the Travel menu and on the Travel page.

**Add wedding photos:** put the images in `images/events/wedding/` and list them in
`assets/js/events.js`:

```js
photos: [
  { src: "ceremony.jpg", alt: "Ceremony under the mandap" },
  { src: "reception.jpg", alt: "Reception tables with candles" }
]
```

The first photo is shown largest. Photos around 2000px on the long edge, saved as JPG at about 80% quality, keep the page fast.
You can also fill in `date`, `location` and `guests` there; empty fields are hidden.

**Add another event:** add a new object to `window.EVENTS` in `assets/js/events.js` and create a
matching folder in `images/events/`.

## Preview locally

```
python3 -m http.server
```

Then open http://localhost:8000.
