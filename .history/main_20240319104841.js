function _1(md){return(
md`# Solar Terminator

It is currently night in the blue region.`
)}

// Define the cities and their coordinates
const cities = [
  { name: "Aberdeen, Scotland", coordinates: [57.15,	2.15] },
  { name: "Adelaide, Australia", coordinates: [34.91666667,	138.6] },
  { name: "Algiers, Algeria", coordinates: [36.83333333,	3] },
  { name: "Amsterdam, Netherlands", coordinates: [52.36666667,	4.883333333] },
  { name: "Ankara, Turkey", coordinates: [39.91666667,	32.91666667] },
  { name: "Asunción, Paraguay", coordinates: [25.25,	57.66666667] },
  { name: "Athens, Greece", coordinates: [37.96666667,	23.71666667] },
  { name: "Auckland, New Zealand", coordinates: [36.86666667,	174.75] },
  { name: "Bangkok, Thailand", coordinates: [13.75,	100.5] },
  { name: "Barcelona, Spain", coordinates: [41.38333333,	2.15] },
  { name: "Beijing, China", coordinates: [39.91666667,	116.4166667] },
  { name: "Belém, Brazil", coordinates: [1.466666667,	48.48333333] },
  { name: "Belfast, Northern Ireland", coordinates: [54.61666667	,	5.933333333] },
  { name: "Belgrade, Serbia", coordinates: [44.86666667,	20.53333333] },
  { name: "Berlin, Germany", coordinates: [52.5,	13.41666667] },
  { name: "Birmingham, England", coordinates: [52.41666667,	1.916666667] },
  { name: "Bogotá, Colombia", coordinates: [4.533333333,	74.25] },
  { name: "Bombay, India", coordinates: [19,	72.8] },
  { name: "Bordeaux, France", coordinates: [44.83333333	,	0.5166666667] },
  { name: "Bremen, Germany", coordinates: [53.08333333	,	8.816666667] },
  { name: "Brisbane, Australia", coordinates: [27.48333333	,	153.1333333] },
  { name: "Bristol, England", coordinates: [51.46666667	,	2.583333333] },
  { name: "Brussels, Belgium", coordinates: [50.86666667	,	4.366666667] },
  { name: "Bucharest, Romania", coordinates: [44.41666667	,	26.11666667] },
  { name: "Budapest, Hungary", coordinates: [47.5	,	19.08333333] },
  { name: "Buenos Aires, Argentina", coordinates: [34.58333333	,	58.36666667] },
  { name: "Cairo, Egypt", coordinates: [30.03333333	,	31.35] },
  { name: "Calcutta, India", coordinates: [22.56666667	,	88.4] },
  { name: "Canton, China", coordinates: [23.11666667	,	113.25] },
  { name: "Cape Town, South Africa", coordinates: [33.91666667	,	18.36666667] },
  { name: "Caracas, Venezuela", coordinates: [10.46666667	,	67.03333333] },
  { name: "Cayenne, French Guiana", coordinates: [4.816666667	,	52.3] },
  { name: "Chihuahua, Mexico", coordinates: [28.61666667	,	106.0833333] },
  { name: "Chongqing, China", coordinates: [29.76666667	,	106.5666667] },
  { name: "Copenhagen, Denmark", coordinates: [55.66666667	,	12.56666667] },
  { name: "Córdoba, Argentina", coordinates: [31.46666667	,	64.16666667] },
  { name: "Dakar, Senegal", coordinates: [14.66666667	,	17.46666667] },
  { name: "Darwin, Australia", coordinates: [12.46666667	,	130.85] },
  { name: "Djibouti, Djibouti", coordinates: [11.5	,	43.05	] },
  { name: "Dublin, Ireland", coordinates: [53.33333333	,	6.25] },
  { name: "Durban, South Africa", coordinates: [29.88333333	,	30.88333333] },
  { name: "Edinburgh, Scotland", coordinates: [55.91666667	,	3.166666667] },
  { name: "Frankfurt, Germany", coordinates: [50.11666667	,	8.683333333] },
  { name: "Georgetown, Guyana", coordinates: [6.75	,	58.25]} ,
  { name: "Glasgow, Scotland", coordinates: [55.83333333	,	4.25] },
  { name: "Guatemala City, Guatemala", coordinates: [14.61666667	,	90.51666667] },
  { name: "Guayaquil, Ecuador", coordinates: [2.166666667	,	79.93333333] },
  { name: "Hamburg, Germany", coordinates: [53.55	,	10.03333333] },
  { name: "Hammerfest, Norway", coordinates: [70.63333333	,	23.63333333] },
  { name: "Havana, Cuba", coordinates: [23.13333333	,	82.38333333] },
  { name: "Helsinki, Finland", coordinates: [60.16666667	,	25] },
  { name: "Hobart, Tasmania", coordinates: [42.86666667	,	147.3166667] },
  { name: "Hong Kong, China", coordinates: [22.33333333	,	114.1833333] },
  { name: "Iquique, Chile", coordinates: [20.16666667	,	70.11666667] },
  { name: "Irkutsk, Russia", coordinates: [52.5	,	104.3333333] },
  { name: "Jakarta, Indonesia", coordinates: [6.266666667	,	106.8] },
  { name: "Johannesburg, South Africa", coordinates: [26.2	,	28.06666667] },
  { name: "Kingston, Jamaica", coordinates: [17.98333333	,	76.81666667] },
  { name: "Kinshasa, Congo", coordinates: [4.3	,	15.28333333] },
  { name: "Kuala Lumpur, Malaysia", coordinates: [3.133333333	,	101.7] },
  { name: "La Paz, Bolivia", coordinates: [16.45	,	68.36666667] },
  { name: "Leeds, England", coordinates: [53.75	,	1.5] },
  { name: "Lima, Peru", coordinates: [12	,	77.03333333] },
  { name: "Lisbon, Portugal", coordinates: [38.73333333	,	9.15] },
  { name: "Liverpool, England", coordinates: [53.41666667	,	3] },
  { name: "London, England", coordinates: [51.53333333	,	0.08333333333] },
  { name: "Lyons, France", coordinates: [45.75	,	4.833333333] },
  { name: "Madrid, Spain", coordinates: [40.43333333	,	3.7] },
  { name: "Manchester, England", coordinates: [53.5	,	2.25] },
  { name: "Manila, Philippines", coordinates: [14.58333333	,	120.95] },
  { name: "Marseilles, France", coordinates: [43.33333333	,	5.333333333] },
  { name: "Mazatlán, Mexico", coordinates: [23.2	,	106.4166667] },
  { name: "Mecca, Saudi Arabia", coordinates: [21.48333333	,	39.75] },
  { name: "Melbourne, Australia", coordinates: [37.78333333	,	144.9666667] },
  { name: "Mexico City, Mexico", coordinates: [19.43333333	,	99.11666667] },
  { name: "Milan, Italy", coordinates: [45.45	,	9.166666667] },
  { name: "Montevideo, Uruguay", coordinates: [34.88333333	,	56.16666667] },
  { name: "Moscow, Russia", coordinates: [55.75	,	37.6] },
  { name: "Munich, Germany", coordinates: [48.13333333	,	11.58333333] },
  { name: "Nagasaki, Japan", coordinates: [32.8	,	129.95] },
  { name: "Nagoya, Japan", coordinates: [35.11666667	,	136.9333333] },
  { name: "Nairobi, Kenya", coordinates: [1.416666667	,	36.91666667] },
  { name: "Nanjing (Nanking), China", coordinates: [32.05	,	118.8833333] },
  { name: "Naples, Italy", coordinates: [40.83333333	,	14.25] },
  { name: "New Delhi, India", coordinates: [28.58333333	,	77.2] },
  { name: "Newcastle-on-Tyne, England", coordinates: [54.96666667	,	1.616666667] },
  { name: "Odessa, Ukraine", coordinates: [46.45	,	30.8] },
  { name: "Osaka, Japan", coordinates: [34.53333333	,	135.5] },
  { name: "Oslo, Norway", coordinates: [59.95	,	10.7] },
  { name: "Panama City, Panama", coordinates: [8.966666667	,	79.53333333] },
  { name: "Paramaribo, Suriname", coordinates: [5.75	,	55.25] },
  { name: "Paris, France", coordinates: [48.8	,	2.333333333] },
  { name: "Perth, Australia", coordinates: [31.95	,	115.8666667] },
  { name: "Plymouth, England", coordinates: [50.41666667	,	4.083333333] },
  { name: "Port Moresby, Papua New Guinea", coordinates: [9.416666667	,	147.1333333] },
  { name: "Prague, Czech Republic", coordinates: [50.08333333	,	14.43333333] },
  { name: "Rangoon, Myanmar", coordinates: [16.83333333	,	96] },
  { name: "Reykjavík, Iceland", coordinates: [64.06666667	,	21.96666667] },
  { name: "Rio de Janeiro, Brazil", coordinates: [22.95	,	43.2] },
  { name: "Rome, Italy", coordinates: [41.9	,	12.45] },
  { name: "Salvador, Brazil", coordinates: [12.93333333	,	38.45] },
  { name: "Santiago, Chile", coordinates: [33.46666667	,	70.75] },
  { name: "St. Petersburg, Russia", coordinates: [59.93333333	,	30.3] },
  { name: "São Paulo, Brazil", coordinates: [23.51666667	,	46.51666667] },
  { name: "Shanghai, China", coordinates: [31.16666667	,	121.4666667] },
  { name: "Singapore, Singapore", coordinates: [1.233333333	,	103.9166667] },
  { name: "Sofia, Bulgaria", coordinates: [42.66666667	,	23.33333333] },
  { name: "Stockholm, Sweden", coordinates: [59.28333333	,	18.05] },
  { name: "Sydney, Australia", coordinates: [34	,	151] },
  { name: "Tananarive, Madagascar	", coordinates: [18.83333333	,	47.55] },
  { name: "Teheran, Iran", coordinates: [35.75	,	51.75] },
  { name: "Tokyo, Japan", coordinates: [35.66666667	,	139.75] },
  { name: "Tripoli, Libya", coordinates: [32.95	,	13.2] },
  { name: "Venice, Italy", coordinates: [45.43333333	,	12.33333333] },
  { name: "Veracruz, Mexico", coordinates: [19.16666667	,	96.16666667] },
  { name: "Vienna, Austria", coordinates: [48.23333333	,	16.33333333] },
  { name: "Vladivostok, Russia", coordinates: [43.16666667	,	132] },
  { name: "Warsaw, Poland", coordinates: [52.23333333	,	21] },
  { name: "Wellington, New Zealand", coordinates: [41.28333333	,	174.7833333] },
  { name: "Zürich, Switzerland", coordinates: [47.35	,	8.516666667] }
];

// Modify the _map function to include city pins
function _mapWithCities(DOM, width, height, d3, projection, graticule, land, night, sphere) {
  const context = DOM.context2d(width, height);
  const path = d3.geoPath(projection, context);
  
  // Draw the graticule, land, and night as before
  context.beginPath(), path(graticule), context.strokeStyle = "#ccc", context.stroke();
  context.beginPath(), path(land), context.fillStyle = "#113131", context.fill();
  context.beginPath(), path(night), context.fillStyle = "rgba(0,0,255,0.5)", context.fill();
  
  // Draw city pins
  cities.forEach(city => {
    const [x, y] = projection(city.coordinates);
    context.beginPath();
    context.arc(x, y, 5, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
    // Optionally, you can add city names next to the pins
    context.fillStyle = "black";
    context.fillText(city.name, x + 10, y + 5);
  });
  
  // Draw the sphere
  context.beginPath(), path(sphere), context.strokeStyle = "#113", context.stroke();
  
  return context.canvas;
}

// Export the modified _map function
export { _mapWithCities as map };

function _map(DOM, width, height, d3, projection, graticule, land, night, sphere)
{
  const context = DOM.context2d(width, height);
  const path = d3.geoPath(projection, context);
  context.beginPath(), path(graticule), context.strokeStyle = "#ccc", context.stroke();
  context.beginPath(), path(land), context.fillStyle = "#113131", context.fill();
  context.beginPath(), path(night), context.fillStyle = "rgba(0,0,255,0.5)", context.fill();
  context.beginPath(), path(sphere), context.strokeStyle = "#113", context.stroke();
  return context.canvas;
}


function _height(d3,projection,width,sphere)
{
  const [[x0, y0], [x1, y1]] = d3.geoPath(projection.fitWidth(width, sphere)).bounds(sphere);
  const dy = Math.ceil(y1 - y0), l = Math.min(Math.ceil(x1 - x0), dy);
  projection.scale(projection.scale() * (l - 1) / l).precision(0.2);
  return dy;
}


function _projection(d3){return(
d3.geoNaturalEarth1()
)}

function _sun(solar)
{
  const now = new Date;
  const day = new Date(+now).setUTCHours(0, 0, 0, 0);
  const t = solar.century(now);
  const longitude = (day - now) / 864e5 * 360 - 180;
  return [longitude - solar.equationOfTime(t) / 4, solar.declination(t)];
}


function _night(d3,antipode,sun){return(
d3.geoCircle()
    .radius(90)
    .center(antipode(sun))
  ()
)}

function _antipode(){return(
([longitude, latitude]) => [longitude + 180, -latitude]
)}

function _sphere(){return(
{type: "Sphere"}
)}

function _graticule(d3){return(
d3.geoGraticule10()
)}

function _land(topojson,world){return(
topojson.feature(world, world.objects.land)
)}

function _world(){return(
fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json").then(response => response.json())
)}

function _topojson(require){return(
require("topojson-client@3")
)}

function _d3(require){return(
require("d3-geo@1")
)}

function _solar(require){return(
require("solar-calculator@0.3/dist/solar-calculator.min.js")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define([md"], _1);
  main.variable(observer("map")).define("map", [DOM","width","height","d3","projection","graticule","land","night","sphere"], _mapWithCities);
  main.variable(observer("height")).define("height", [d3","projection","width","sphere"], _height);
  main.variable(observer("projection")).define("projection", [d3"], _projection);
  main.variable(observer("sun")).define("sun", [solar"], _sun);
  main.variable(observer("night")).define("night", [d3","antipode","sun"], _night);
  main.variable(observer("antipode")).define("antipode", _antipode);
  main.variable(observer("sphere")).define("sphere", _sphere);
  main.variable(observer("graticule")).define("graticule", [d3"], _graticule);
  main.variable(observer("land")).define("land", [topojson","world"], _land);
  main.variable(observer("world")).define("world", _world);
  main.variable(observer("topojson")).define("topojson", [require"], _topojson);
  main.variable(observer("d3")).define("d3", [require"], _d3);
  main.variable(observer("solar")).define("solar", [require"], _solar);
  return main;
}
