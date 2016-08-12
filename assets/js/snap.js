// First lets create our drawing surface out of existing SVG element
// If you want to create new surface just provide dimensions
// like s = Snap(800, 600);
var svgwidth = $('#svgwrapper').width()
$('#svgwrapper').height(svgwidth)
var s = Snap("#svgwrapper");
// Lets create big circle in the middle:
var bigCircle = s.rect(0.5*svgwidth, 0.5*svgwidth, 0.25*svgwidth, 0.25*svgwidth);
var joepie;
Snap.load("https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg", function(x){
  s.append(x);
});
// By default its black, lets change its attributes
bigCircle.attr({
    fill: "#bada55",
    stroke: "#000",
    strokeWidth: 5
});

bigCircle.drag();


$(window).resize(function(){
  svgwidth = $('#svgwrapper').width()
  $('#svgwrapper').height(svgwidth)
});

setTimeout(function(){bigCircle.animate({"x":-10, "width":1000},100)}, 1000);
