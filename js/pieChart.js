var data_V1 = [{
  "variety": "Pinot Noir",
  "count": 13272,
  "Description": "Pinot Noir is a red wine that is typically light to medium bodied and fruit-forward. Originating from Burgundy, it holds a pleasant spot in the red-wine spectrum—not too dry, but certainly not sweet."}, {
  "variety": "Chardonnay",
  "count": 11753,
  "Description": "Chardonnay grape is the most popular type of white wine, found all over the world. The flavor, taste, and aroma of it will though, depending on where it was made and what processing methods were used. Chardonnay has a variety of different styles and flavors, and remains a major type of grape. As a result of it's popularity, this fine wine spread throughout Europe and other locations of the world such as Australia and California."}, {
  "variety": "Cabernet Sauvignon",
  "count": 9472,
  "Description": " Cabernet Sauvignon is known for its dark color, full body and an alcohol content that is over 13.5%. The wine is dry (not sweet) and has a healthy level of tannin, which is why your mouth dries out when you sip it." }, {
  "variety": "Red Blend",
  "count": 8946,
  "Description": "The aim of blending is to make a whole wine that is greater than the sum of its parts. Sometimes grapes are blended with other fruit from other regions to produce a wine of greater balance and complexity. In Australia, there are two main red grape varieties that form the base of most red blends – Shiraz and Cabernet Sauvignon and these are often blended together."}, {
  "variety": "Bordeaux-style Red Blend",
  "count": 6015,
  "Description": "The phrase “Bordeaux-style red blend” may be used informally to describe red wines produced from a combination of Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot, and to a lesser extent Carmenère and Malbec."}, {
  "variety": "Riesling",
  "count": 5189,
  "Description": "Riesling is an aromatic grape variety with flowery, almost perfumed aromas and high acidity, making it one of the most versatile and food-friendly white wines available. It is also highly terroir-expressive, meaning that the character of Riesling wines is clearly influenced by the wine's place of origin."}, {
  "variety": "Sauvignon Blanc",
  "count": 4967,
  "Description": "Sauvignon Blanc is a white wine that owes much of its popularity to winemakers in Bordeaux and the Loire Valley in France. The Sauvignon Blanc taste is very different from other white wines, like Chardonnay, because of its green and herbaceous flavors."}, {
  "variety": "Syrah",
  "count": 4142,
  "Description": "Syrah is responsible for some of the darkest full-bodied red wines in the world. It has dark fruit flavors from sweet blueberry to savory black olive. "}, {
  "variety": "Rosé",
  "count": 3564,
  "Description": "Rosé wine is wine made from red grapes, but the process is faster and a little less intense than making red wines. There are several ways to process the red grapes into this wine. One process is the maceration method. Crushed grapes rest in their juices than winemakers strain the liquid, and this is the rosé wine."}, {
  "variety": "Merlot",
  "count": 3102,
  "Description": "Merlot is a dark blue-colored wine grape variety, that is used as both a blending grape and for varietal wines. Its softness and fleshiness, combined with its earlier ripening, makes Merlot a popular grape for blending with the sterner, later-ripening Cabernet Sauvignon, which tends to be higher in tannin."}, {
  "variety": "Nebbiolo",
  "count": 2804,
  "Description": "Nebbiolo is a full-bodied red wine. Nebbiolo wines are translucent and have a delicate smell, but when you taste them you are greeted with robust tannin and high acidity."}, {
  "variety": "Zinfandel",
  "count": 2714,
  "Description": "Zinfandel, meaning the red wine, is known for its rich, dark color scheme, medium to high tannin levels, and higher alcohol content (14-17% ABV). The featured flavors of Zinfandel include raspberry, blackberry, cherry, plums, raisins, spice, and black pepper all wrapped around various intensities of oak."}, {
  "variety": "Sangiovese",
  "count": 2707,
  "Description": "Sangiovese is savory. Because of its ability to be a chameleon, Sangiovese wines offer a wide range of tastes from very earthy and rustic-as is the case with many Chianti Classico–to round and fruit-forward."}, {
  "variety": "Malbec",
  "count": 2652,
  "Description": "Malbec is a wine that seemingly came out of nowhere over the past ten years and quickly has become one of the most popular red wines on the American market. It is a red wine that is a crowd-pleaser and easy to drink, with a ton of juicy fruit flavors."}, {
  "variety": "Portuguese Red",
  "count": 2466,
  "Description": ""}, {
  "variety": "White Blend",
  "count": 2360,
  "Description": "White Blend is a catch-all category for white grape blends that are not based upon a traditional regional composition. "}, {
  "variety": "Sparkling Blend",
  "count": 2153,
  "Description": "Grapes are picked (usually just a tinsy bit younger to preserve acidity) and fermented into a dry wine. The winemaker then takes the various base wines and blends them together into what the French call a cuvée, which is the final sparkling wine blend."}, {
  "variety": "Tempranillo",
  "count": 1810,
  "Description": "Tempranillo is a red grape variety which forms the backbone of some of the finest wines from Spain and Portugal. A thick-skinned red grape with a high anthocyanin count that makes for deep-colored wines with moderate tannins, Tempranillo is well suited to modern consumer tastes."}, {
  "variety": "Rhône-style Red Blend",
  "count": 1471,
  "Description": "The indigenous grape varieties that grow in the region, like Syrah, Grenache, Mourvèdre, Viognier and Roussanne, are often referred to as Rhône grapes. So, regardless of their place of origin, wines made from these grapes are said to be Rhône-style wines the world over."}, {
  "variety": "Pinot Gris",
  "count": 1455,
  "Description": "Pinot Gris is a very well known white wine grape that produces a crisp tasting wine. A medium to full-bodied style of Pinot Gris has balanced acidity and a slight sweetness. Pinot Gris can also be lighter bodied with a crisp refreshing taste and hints of spice."}
];


var width = parseInt(d3.select('#pieChart').style('width'), 10);
var height = width;
var radius = (Math.min(width, height) - 15) / 2;

var variety = function getObject(obj) {
  varieties = [];
  for (var i = 0; i < obj.length; i++) {
    varieties.push(obj[i].variety);
  }
  return varieties
};
var arcOver = d3.svg.arc()
  .outerRadius(radius + 10)
  .innerRadius(150);

var color = d3.scale.ordinal()
  .domain(variety(data_V1))
  .range(["#e04e5c","#f47246","#f9923b","#fcb844","#ffc107","#dfe271","#b2ce67","#86ce67","#28a745","#20c997","#4be5c1"]);



var arc = d3.svg.arc()
  .outerRadius(radius - 10)
  .innerRadius(150);

var pie = d3.layout.pie()
  .sort(null)
  .value(function(d) {
    return +d.count;
  });

change = function(d, i) {
  var angle = 90 - ((d.startAngle * (180 / Math.PI)) + ((d.endAngle - d.startAngle) * (180 / Math.PI) / 2))
  svg4.transition()
    .duration(1000)
    .attr("transform", "translate(" + radius + "," + height / 2 + ") rotate(" + angle + ")")
  d3.selectAll("path")
    .transition()
    .attr("d", arc)
  d3.select(i)
    .transition()
    .duration(1000)
    .attr("d", arcOver)
};

var svg4 = d3.select("#pieChart").append("svg")
  .attr("width", '100%')
  .attr("height", '100%')
  .attr('viewBox', '0 0 ' + Math.min(width, height) + ' ' + Math.min(width, height))
  .attr('preserveAspectRatio', 'xMinYMin')
  .append("g")
  .attr("transform", "translate(" + radius + "," + height / 2 + ")");

var g = svg4.selectAll("path")
  .data(pie(data_V1))
  .enter().append("path")
  .style("fill", function(d) {
    return color(d.data.variety);
  })
  .attr("d", arc)
  .style("fill", function(d) {
    return color(d.data.variety);
  })
  .on("click", function(d) {
    change(d, this);
    $('.text-container').hide();
    $('#segmentTitle').replaceWith('<h2 id="segmentTitle">' + d.data.variety + ": " + d.data.count + '</h2>');
    // $('#')
    $('#segmentText').replaceWith('<h5 id="segmentText">' + "<span style='color:#6c757d'>"+d.data.Description + "</span>"+ '</h5>');
    $('.text-container').fadeIn(400);
  });

document.querySelector('style').textContent += '@media(max-width:767px) {#pieChart { transform: rotate(90deg); transform-origin: 50% 50%; transition: 1s; max-width: 50%; } .text-container { width: 100%; min-height: 0; }} @media(min-width:768px) {#pieChart { transition: 1s;}}'



