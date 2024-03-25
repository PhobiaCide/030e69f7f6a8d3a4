function _1(md) {
  return md`
# Solar Terminator

It is currently night in the blue region.
Note that some of the pins have been "tweaked" in the interest of legibility.
  `;
}

// Define the friends and their coordinates
const friends = [
  {
    name: "PhobiaCide",
    coordinates: [-92.39345, 37.89037],
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
    coordinates: [-158.0001, 21.4389],
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
    name: "Manifest Densiti",
    coordinates: [-77.0369, 40.9072],
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
    name: "TJSmiffy",
    coordinates: [-2.037, 54.8167],
  },
  {
    name: "Ser Nub",
    coordinates: [-2.583333333, 51.46666667],
  },
  {
    name: "DStruction",
    coordinates: [-83.437386, 46.369157],
  },
  {
    name: "LETUSDIG",
    coordinates: [144.9666667, -37.78333333],
  },
  {
    name: "Jippe",
    coordinates: [18, 48],
  },
  {
    name: "SupremeMagus",
    coordinates: [-85.7585, 39.3527],
  },
  {
    name: "Zlo",
    coordinates: [20.4612, 44.8125],
  },
  {
    name: "Dom",
    coordinates: [-122.6784, 44.5152],
  },
  {
    name: "Intrepid Speculator",
    coordinates: [-80.1918, 25.7617],
  },
  {
    name: "Amber",
    coordinates: [-79.3832, 44.3532],
  },
  {
    name: "Stirus",
    coordinates: [-113.8115, 52.269],
  },
  {
    name: "Balthazzarr Nadieu",
    coordinates: [-118.7885, 55.1707],
  },
  {
    name: "art_gravy",
    coordinates: [-124.1637, 40.8021],
  },
  {
    name: "Jakob",
    coordinates: [10.4024, 55.4038],
  }
];

// Modify the _map function to include friend pins
function _mapWithFriends(
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

  // Draw friend pins
  friends.forEach((friend) => {
    const [x, y] = projection(friend.coordinates);
    context.beginPath();
    context.arc(x, y, 4, 0, 2 * Math.PI);
    context.fillStyle = "yellow";
    context.fill();
    // Optionally, you can add friend names next to the pins
    context.fillStyle = "white";
    context.fillText(friend.name, x + 10, y + 5);
  });

  // Draw the sphere
  context.beginPath(),
    path(sphere),
    (context.strokeStyle = "#999"),
    context.stroke();

  return context.canvas;
}

// Export the modified _map function
export { _mapWithFriends as map };

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
  console.log(d3);
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
      _mapWithFriends
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
  main
    .variable(observer("antipode"))
    .define("antipode", _antipode);
  main
    .variable(observer("sphere"))
    .define("sphere", _sphere);
  main
    .variable(observer("graticule"))
    .define("graticule", ["d3"], _graticule);
  main
    .variable(observer("land"))
    .define("land", ["topojson", "world"], _land);
  main
    .variable(observer("world"))
    .define("world", _world);
  main
    .variable(observer("topojson"))
    .define("topojson", ["require"], _topojson);
  main
    .variable(observer("d3"))
    .define("d3", ["require"], _d3);
  main
    .variable(observer("solar"))
    .define("solar", ["require"], _solar);
  return main;
}
