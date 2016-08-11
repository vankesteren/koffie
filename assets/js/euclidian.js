var euclid = function(){
  var input = [parseInt($("#var1").val()) || 0,
               parseInt($("#var2").val()) || 0,
               parseInt($("#var3").val()) || 0,
               parseInt($("#var4").val()) || 0];

  $("#output-block").html("<h1>"+JSON.stringify(input)+"</h1>");
  for (var i=0; i<json.length; i++){
    var compare = $.map(json[i], function(el) { return(el) }).slice(1);
    dataset[i].dist = Math.sqrt(math.dot(input,compare));
  };

  var closest = dataset.sort(function(a,b){return a.dist-b.dist})[1];

  $("#output-block").html("")
    .append("<h1>"+htmltext+closest.name+"</h1>")
    .append("<p>"+JSON.stringify(closest)+"</p>");
}

var json;
var dataset;
var out;

var htmltext = "The closest value to this is: ";

$("#var1").on("change", euclid);
$("#var2").on("change", euclid);
$("#var3").on("change", euclid);
$("#var4").on("change", euclid);

$.get("assets/JSON/euclid.txt", function(data){
  json = $.parseJSON(data);
  dataset = json;
  out = new Array(json.length).fill(0);
});
