function _1(md) {
  return md`
# Solar Terminator

It is currently night in the blue region.
Note that some of the pins have been "tweaked" in the interest of legibility.
  `;
}

// Define the cities and their coordinates
const cities = [
  {
    name: "PhobiaCide",
    coordinates: [-92.39345, 38.89037],
  },
  {
    name: "Nth",
    coordinates: [-119.24017, 47.20404],
  },
  {
    name: "Braelor",
    coordinates: [-119.24017, 46.00404],
  },
  {
    name: "Yomdran",
    coordinates: [-155.581684, 19.598768],
  },
  {
    name: "Porkchops O'Chunky",
    coordinates: [174.75, -36.86666667],
  },
  {
    name: "Thibault",
    coordinates: [4.366666667, 49.86666667],
  },
  {
    name: "Rossi",
    coordinates: [-6.25, 53.33333333],
  },
  {
    name: "Instynx",
    coordinates: [-4.166666667, 56.91666667],
  },
  {
    name: "Mikayla",
    coordinates: [-118.2426, 34.0549],
  },
  {
    name: "Ragnarok23",
    coordinates: [-71.0589, 42.3601],
  },
  {
    name: "Green Furian",
    coordinates: [121.774, 12.8797],
  },
  {
    name: "Manifest Density",
    coordinates: [-77.0369, 38.9072],
  },
  {
    name: "Oragix",
    coordinates: [-6.9118, 61.8926],
  },
  {
    name: "Edwarkin",
    coordinates: [-3.7, 40.43333333],
  },
  {
    name: "Cryonox",
    coordinates: [103.9166667, 1.233333333],
  },
  {
    name: "Smiffy",
    coordinates: [-2.037, 54.8167],
  },
  {
    name: "Ser Nub",
    coordinates: [-2.583333333, 51.46666667],
  },
  {
    name: "DStruction",
    coordinates: [-83.437386, 45.069157],
  },
  {
    name: "LETUSDIG",
    coordinates: [144.9666667, -37.78333333],
  },
    {
    name: "Jipee",
    coordinates: [18, 48],
  },
  {
    name: "SupremeMagus",
    coordinates: [-85.7585, 39.8527],
  },
    {
    name: "Zlo",
    coordinates: [-20.4612, 44.8125],
  },
  {
    name: "Dom",
    coordinates: [-122.6784, 44.5152],}
  /*
  {
    "name": "Adelaide, Australia",
    "coordinates": [
      138.6,
      -34.91666667
    ]
  },
  {
    "name": "Algiers, Algeria",
    "coordinates": [
      3,
      36.83333333
    ]
  },
  {
    "name": "Amsterdam, Netherlands",
    "coordinates": [
      4.883333333,
      52.36666667
    ]
  },
  {
    "name": "Ankara, Turkey",
    "coordinates": [
      32.91666667,
      39.91666667
    ]
  },
  {
    "name": "Asunción, Paraguay",
    "coordinates": [
      -57.66666667,
      -25.25
    ]
  },
  {
    "name": "Athens, Greece",
    "coordinates": [
      23.71666667,
      37.96666667
    ]
  },
    {
    "name": "Atlanta, Georgia, USA",
    "coordinates": [
      -84.3833333333,
      33.75
    ]
  },
  {
    "name": "Auckland, New Zealand",
    "coordinates": [
      174.75,
      -36.86666667
    ]
  },
  {
    "name": "Bangkok, Thailand",
    "coordinates": [
      100.5,
      13.75
    ]
  },
  {
    "name": "Barcelona, Spain",
    "coordinates": [
      2.15,
      41.38333333
    ]
  },
  {
    "name": "Beijing, China",
    "coordinates": [
      116.4166667,
      39.91666667
    ]
  },
  {
    "name": "Belém, Brazil",
    "coordinates": [
      -48.48333333,
      -1.466666667
    ]
  },
  {
    "name": "Belfast, Northern Ireland",
    "coordinates": [
      -5.933333333,
      54.61666667
    ]
  },
  {
    "name": "Belgrade, Serbia",
    "coordinates": [
      20.53333333,
      44.86666667
    ]
  },
  {
    "name": "Berlin, Germany",
    "coordinates": [
      13.41666667,
      52.5
    ]
  },
  {
    "name": "Birmingham, England",
    "coordinates": [
      -1.916666667,
      52.41666667
    ]
  },
  {
    "name": "Bogotá, Colombia",
    "coordinates": [
      -74.25,
      4.533333333
    ]
  },
  {
    "name": "Bombay, India",
    "coordinates": [
      72.8,
      19
    ]
  },
  {
    "name": "Bordeaux, France",
    "coordinates": [
      -0.5166666667,
      44.83333333
    ]
  },
  {
    "name": "Bremen, Germany",
    "coordinates": [
      8.816666667,
      53.08333333
    ]
  },
  {
    "name": "Brisbane, Australia",
    "coordinates": [
      153.1333333,
      -27.48333333
    ]
  },
  {
    "name": "Bristol, England",
    "coordinates": [
      -2.583333333,
      51.46666667
    ]
  },
  {
    "name": "Brussels, Belgium",
    "coordinates": [
      4.366666667,
      50.86666667
    ]
  },
  {
    "name": "Bucharest, Romania",
    "coordinates": [
      26.11666667,
      44.41666667
    ]
  },
  {
    "name": "Budapest, Hungary",
    "coordinates": [
      19.08333333,
      47.5
    ]
  },
  {
    "name": "Buenos Aires, Argentina",
    "coordinates": [
      -58.36666667,
      -34.58333333
    ]
  },
  {
    "name": "Cairo, Egypt",
    "coordinates": [
      31.35,
      30.03333333
    ]
  },
  {
    "name": "Calcutta, India",
    "coordinates": [
      88.4,
      22.56666667
    ]
  },
  {
    "name": "Canton, China",
    "coordinates": [
      113.25,
      23.11666667
    ]
  },
  {
    "name": "Cape Town, South Africa",
    "coordinates": [
      18.36666667,
      -33.91666667
    ]
  },
  {
    "name": "Caracas, Venezuela",
    "coordinates": [
      -67.03333333,
      10.46666667
    ]
  },
  {
    "name": "Cayenne, French Guiana",
    "coordinates": [
      -52.3,
      4.816666667
    ]
  },
  {
    "name": "Chihuahua, Mexico",
    "coordinates": [
      -106.0833333,
      28.61666667
    ]
  },
  {
    "name": "Chongqing, China",
    "coordinates": [
      106.5666667,
      29.76666667
    ]
  },
  {
    "name": "Copenhagen, Denmark",
    "coordinates": [
      12.56666667,
      55.66666667
    ]
  },
  {
    "name": "Córdoba, Argentina",
    "coordinates": [
      -64.16666667,
      -31.46666667
    ]
  },
  {
    "name": "Dakar, Senegal",
    "coordinates": [
      -17.46666667,
      14.66666667
    ]
  },
    {
    "name": "Dalas, Texas, USA",
    "coordinates": [
      -96.76666666,
      32.766666667
    ]
  },
  {
    "name": "Darwin, Australia",
    "coordinates": [
      130.85,
      -12.46666667
    ]
  },
  {
    "name": "Djibouti, Djibouti",
    "coordinates": [
      43.05,
      11.5
    ]
  },
  {
    "name": "Dublin, Ireland",
    "coordinates": [
      -6.25,
      53.33333333
    ]
  },
  {
    "name": "Durban, South Africa",
    "coordinates": [
      30.88333333,
      -29.88333333
    ]
  },
  {
    "name": "Edinburgh, Scotland",
    "coordinates": [
      -3.166666667,
      55.91666667
    ]
  },
  {
    "name": "Frankfurt, Germany",
    "coordinates": [
      8.683333333,
      50.11666667
    ]
  },
  {
    "name": "Georgetown, Guyana",
    "coordinates": [
      -58.25,
      6.75
    ]
  },
  {
    "name": "Glasgow, Scotland",
    "coordinates": [
      -4.25,
      55.83333333
    ]
  },
  {
    "name": "Guatemala City, Guatemala",
    "coordinates": [
      -90.51666667,
      14.61666667
    ]
  },
  {
    "name": "Guayaquil, Ecuador",
    "coordinates": [
      -79.93333333,
      -2.166666667
    ]
  },
  {
    "name": "Hamburg, Germany",
    "coordinates": [
      10.03333333,
      53.55
    ]
  },
  {
    "name": "Hammerfest, Norway",
    "coordinates": [
      23.63333333,
      70.63333333
    ]
  },
  {
    "name": "Havana, Cuba",
    "coordinates": [
      -82.38333333,
      23.13333333
    ]
  },
  {
    "name": "Helsinki, Finland",
    "coordinates": [
      25,
      60.16666667
    ]
  },
  {
    "name": "Hobart, Tasmania",
    "coordinates": [
      147.3166667,
      -42.86666667
    ]
  },
  {
    "name": "Hong Kong, China",
    "coordinates": [
      114.1833333,
      22.33333333
    ]
  },
  {
    "name": "Iquique, Chile",
    "coordinates": [
      -70.11666667,
      -20.16666667
    ]
  },
  {
    "name": "Irkutsk, Russia",
    "coordinates": [
      104.3333333,
      52.5
    ]
  },
  {
    "name": "Jakarta, Indonesia",
    "coordinates": [
      106.8,
      -6.266666667
    ]
  },
  {
    "name": "Johannesburg, South Africa",
    "coordinates": [
      28.06666667,
      -26.2
    ]
  },
  {
    "name": "Kingston, Jamaica",
    "coordinates": [
      -76.81666667,
      17.98333333
    ]
  },
  {
    "name": "Kinshasa, Congo",
    "coordinates": [
      15.28333333,
      -4.3
    ]
  },
  {
    "name": "Kuala Lumpur, Malaysia",
    "coordinates": [
      101.7,
      3.133333333
    ]
  },
  {
    "name": "La Paz, Bolivia",
    "coordinates": [
      -68.36666667,
      -16.45
    ]
  },
  {
    "name": "Leeds, England",
    "coordinates": [
      -1.5,
      53.75
    ]
  },
  {
    "name": "Lima, Peru",
    "coordinates": [
      -77.03333333,
      -12
    ]
  },
  {
    "name": "Lisbon, Portugal",
    "coordinates": [
      -9.15,
      38.73333333
    ]
  },
  {
    "name": "Liverpool, England",
    "coordinates": [
      -3,
      53.41666667
    ]
  },
  {
    "name": "London, England",
    "coordinates": [
      -0.08333333333,
      51.53333333
    ]
  },
  {
    "name": "Lyons, France",
    "coordinates": [
      4.833333333,
      45.75
    ]
  },
  {
    "name": "Madrid, Spain",
    "coordinates": [
      -3.7,
      40.43333333
    ]
  },
  {
    "name": "Manchester, England",
    "coordinates": [
      -2.25,
      53.5
    ]
  },
  {
    "name": "Manila, Philippines",
    "coordinates": [
      120.95,
      14.58333333
    ]
  },
  {
    "name": "Marseilles, France",
    "coordinates": [
      5.333333333,
      43.33333333
    ]
  },
  {
    "name": "Mazatlán, Mexico",
    "coordinates": [
      -106.4166667,
      23.2
    ]
  },
  {
    "name": "Mecca, Saudi Arabia",
    "coordinates": [
      39.75,
      21.48333333
    ]
  },
  {
    "name": "Melbourne, Australia",
    "coordinates": [
      144.9666667,
      -37.78333333
    ]
  },
  {
    "name": "Mexico City, Mexico",
    "coordinates": [
      -99.11666667,
      19.43333333
    ]
  },
  {
    "name": "Milan, Italy",
    "coordinates": [
      9.166666667,
      45.45
    ]
  },
  {
    "name": "Montevideo, Uruguay",
    "coordinates": [
      -56.16666667,
      -34.88333333
    ]
  },
  {
    "name": "Moscow, Russia",
    "coordinates": [
      37.6,
      55.75
    ]
  },
  {
    "name": "Munich, Germany",
    "coordinates": [
      11.58333333,
      48.13333333
    ]
  },
  {
    "name": "Nagasaki, Japan",
    "coordinates": [
      129.95,
      32.8
    ]
  },
  {
    "name": "Nagoya, Japan",
    "coordinates": [
      136.9333333,
      35.11666667
    ]
  },
  {
    "name": "Nairobi, Kenya",
    "coordinates": [
      36.91666667,
      -1.416666667
    ]
  },
  {
    "name": "Nanjing (Nanking), China",
    "coordinates": [
      118.8833333,
      32.05
    ]
  },
  {
    "name": "Naples, Italy",
    "coordinates": [
      14.25,
      40.83333333
    ]
  },
  {
    "name": "New Delhi, India",
    "coordinates": [
      77.2,
      28.58333333
    ]
  },
  {
    "name": "Newcastle-on-Tyne, England",
    "coordinates": [
      -1.616666667,
      54.96666667
    ]
  },
  {
    "name": "Odessa, Ukraine",
    "coordinates": [
      30.8,
      46.45
    ]
  },
  {
    "name": "Osaka, Japan",
    "coordinates": [
      135.5,
      34.53333333
    ]
  },
  {
    "name": "Oslo, Norway",
    "coordinates": [
      10.7,
      59.95
    ]
  },
  {
    "name": "Panama City, Panama",
    "coordinates": [
      -79.53333333,
      8.966666667
    ]
  },
  {
    "name": "Paramaribo, Suriname",
    "coordinates": [
      -55.25,
      5.75
    ]
  },
  {
    "name": "Paris, France",
    "coordinates": [
      2.333333333,
      48.8
    ]
  },
  {
    "name": "Perth, Australia",
    "coordinates": [
      115.8666667,
      -31.95
    ]
  },
  {
    "name": "Plymouth, England",
    "coordinates": [
      -4.083333333,
      50.41666667
    ]
  },
  {
    "name": "Port Moresby, Papua New Guinea",
    "coordinates": [
      147.1333333,
      -9.416666667
    ]
  },
  {
    "name": "Prague, Czech Republic",
    "coordinates": [
      14.43333333,
      50.08333333
    ]
  },
  {
    "name": "Rangoon, Myanmar",
    "coordinates": [
      96,
      16.83333333
    ]
  },
  {
    "name": "Reykjavík, Iceland",
    "coordinates": [
      -21.96666667,
      64.06666667
    ]
  },
  {
    "name": "Rio de Janeiro, Brazil",
    "coordinates": [
      -43.2,
      -22.95
    ]
  },
  {
    "name": "Rome, Italy",
    "coordinates": [
      12.45,
      41.9
    ]
  },
  {
    "name": "Salvador, Brazil",
    "coordinates": [
      -38.45,
      -12.93333333
    ]
  },
  {
    "name": "Santiago, Chile",
    "coordinates": [
      -70.75,
      -33.46666667
    ]
  },
  {
    "name": "St. Petersburg, Russia",
    "coordinates": [
      30.3,
      59.93333333
    ]
  },
  {
    "name": "São Paulo, Brazil",
    "coordinates": [
      -46.51666667,
      -23.51666667
    ]
  },
  {
    "name": "Shanghai, China",
    "coordinates": [
      121.4666667,
      31.16666667
    ]
  },
  {
    "name": "Singapore, Singapore",
    "coordinates": [
      103.9166667,
      1.233333333
    ]
  },
  {
    "name": "Sofia, Bulgaria",
    "coordinates": [
      23.33333333,
      42.66666667
    ]
  },
  {
    "name": "Stockholm, Sweden",
    "coordinates": [
      18.05,
      59.28333333
    ]
  },
  {
    "name": "Sydney, Australia",
    "coordinates": [
      151,
      -34
    ]
  },
  {
    "name": "Tananarive, Madagascar\t",
    "coordinates": [
      47.55,
      -18.83333333
    ]
  },
  {
    "name": "Teheran, Iran",
    "coordinates": [
      51.75,
      35.75
    ]
  },
  {
    "name": "Tokyo, Japan",
    "coordinates": [
      139.75,
      35.66666667
    ]
  },
  {
    "name": "Tripoli, Libya",
    "coordinates": [
      13.2,
      32.95
    ]
  },
  {
    "name": "Venice, Italy",
    "coordinates": [
      12.33333333,
      45.43333333
    ]
  },
  {
    "name": "Veracruz, Mexico",
    "coordinates": [
      -96.16666667,
      19.16666667
    ]
  },
  {
    "name": "Vienna, Austria",
    "coordinates": [
      16.33333333,
      48.23333333
    ]
  },
  {
    "name": "Vladivostok, Russia",
    "coordinates": [
      132,
      43.16666667
    ]
  },
  {
    "name": "Warsaw, Poland",
    "coordinates": [
      21,
      52.23333333
    ]
  },
  {
    "name": "Wellington, New Zealand",
    "coordinates": [
      174.7833333,
      -41.28333333
    ]
  },
  {
    "name": "Zürich, Switzerland",
    "coordinates": [
      8.516666667,
      47.35
    ]
  }
  */
];

// Modify the _map function to include city pins
function _mapWithCities(
  DOM,
  width,
  height,
  d3,
  projection,
  graticule,
  land,
  night,
  sphere
) {
  const context = DOM.context2d(width, height);
  const path = d3.geoPath(projection, context);

  // Draw the graticule, land, and night as before
  context.beginPath(),
    path(graticule),
    (context.strokeStyle = "#eeeeee"),
    context.stroke(),
    (context.fillStyle = "#eeeeee11"),
    context.fill();
  context.beginPath(),
    path(land),
    (context.fillStyle = "#11313199"),
    context.fill(),
    (context.strokeStyle = "#113131"),
    context.stroke();
  context.beginPath(),
    path(night),
    (context.fillStyle = "rgba(0,0,255,0.4)"),
    context.fill(),
    (context.strokeStyle = "rgba(0,0,255,0.9)"),
    context.stroke();

  // Draw city pins
  cities.forEach((city) => {
    const [x, y] = projection(city.coordinates);
    context.beginPath();
    context.arc(x, y, 4, 0, 2 * Math.PI);
    context.fillStyle = "yellow";
    context.fill();
    // Optionally, you can add city names next to the pins
    context.fillStyle = "white";
    context.fillText(city.name, x + 10, y + 5);
  });

  // Draw the sphere
  context.beginPath(),
    path(sphere),
    (context.strokeStyle = "#999"),
    context.stroke();

  return context.canvas;
}

// Export the modified _map function
export { _mapWithCities as map };

function _map(
  DOM,
  width,
  height,
  d3,
  projection,
  graticule,
  land,
  night,
  sphere
) {
  const context = DOM.context2d(width, height);
  const path = d3.geoPath(projection, context);
  context.beginPath(),
    path(graticule),
    (context.strokeStyle = "#111"),
    context.stroke();
  context.beginPath(), path(land), (context.fillStyle = "#000"), context.fill();
  context.beginPath(),
    path(night),
    (context.fillStyle = "rgba(0,0,255,0.2)"),
    context.fill();
  context.beginPath(),
    path(sphere),
    (context.strokeStyle = "#000"),
    context.stroke();
  return context.canvas;
}

function _height(d3, projection, width, sphere) {
  const [[x0, y0], [x1, y1]] = d3
    .geoPath(projection.fitWidth(width, sphere))
    .bounds(sphere);
  const dy = Math.ceil(y1 - y0),
    l = Math.min(Math.ceil(x1 - x0), dy);
  projection.scale((projection.scale() * (l - 1)) / l).precision(0.2);
  return dy;
}

function _projection(d3) {
  return d3.geoNaturalEarth1();
}

function _sun(solar) {
  const now = new Date();
  const day = new Date(+now).setUTCHours(0, 0, 0, 0);
  const t = solar.century(now);
  const longitude = ((day - now) / 864e5) * 360 - 180;
  return [longitude - solar.equationOfTime(t) / 4, solar.declination(t)];
}

function _night(d3, antipode, sun) {
  return d3.geoCircle().radius(90).center(antipode(sun))();
}

function _antipode() {
  return ([longitude, latitude]) => [longitude + 180, -latitude];
}

function _sphere() {
  return { type: "Sphere" };
}

function _graticule(d3) {
  return d3.geoGraticule10();
}

function _land(topojson, world) {
  return topojson.feature(world, world.objects.land);
}

function _world() {
  return fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json").then(
    (response) => response.json()
  );
}

function _topojson(require) {
  return require("topojson-client@3");
}

function _d3(require) {
  return require("d3-geo@1");
}

function _solar(require) {
  return require("solar-calculator@0.3/dist/solar-calculator.min.js");
}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main
    .variable(observer("map"))
    .define(
      "map",
      [
        "DOM",
        "width",
        "height",
        "d3",
        "projection",
        "graticule",
        "land",
        "night",
        "sphere",
      ],
      _mapWithCities
    );
  main
    .variable(observer("height"))
    .define("height", ["d3", "projection", "width", "sphere"], _height);
  main
    .variable(observer("projection"))
    .define("projection", ["d3"], _projection);
  main.variable(observer("sun")).define("sun", ["solar"], _sun);
  main
    .variable(observer("night"))
    .define("night", ["d3", "antipode", "sun"], _night);
  main.variable(observer("antipode")).define("antipode", _antipode);
  main.variable(observer("sphere")).define("sphere", _sphere);
  main.variable(observer("graticule")).define("graticule", ["d3"], _graticule);
  main.variable(observer("land")).define("land", ["topojson", "world"], _land);
  main.variable(observer("world")).define("world", _world);
  main
    .variable(observer("topojson"))
    .define("topojson", ["require"], _topojson);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("solar")).define("solar", ["require"], _solar);
  return main;
}
