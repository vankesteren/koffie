var euclid = function(){
  var input = [parseInt($("#var1").val()) || 0,
               parseInt($("#var2").val()) || 0,
               parseInt($("#var3").val()) || 0,
               parseInt($("#var4").val()) || 0];
  var disttype = $("#disttype").html();

  for (var i=0; i<json.length; i++){
    var compare = $.map(json[i], function(el) { return(el) }).slice(1,-1);
    var diff = math.subtract(input,compare);
    if (disttype == "Euclidian Distance"){
      json[i].dist = Math.sqrt(math.dot(diff,diff));
    } else {
      json[i].dist = math.sum(math.abs(diff));
    }

  }

  var closest = sortJSON(json,"dist")[0];

  $("#output-block").html("")
    .append("<h1>"+htmltext+closest.name+"</h1>")
    .append("<p>"+tbler(closest)+"</p>");
}

var sortJSON = function(data, key) {
    return data.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

// Randomise function is bound to button
var randomise = function(){
  $("#var1").val(Math.random() * 10);
  $("#var2").val(Math.random() * 10);
  $("#var3").val(Math.random() * 10);
  $("#var4").val(Math.random() * 10);
  euclid();
}

// To make a table from the json output
var tbler = function(entry) {
    tbl_body = '<table><tr><th>Field</th><th>Value</th></tr><tr><th>Name</th><th>'+
    entry.name+'</th></tr><tr><td>Distance</td><td>'+
    entry.dist+'</td></tr><tr><td>Var1</td><td>'+
    entry.var1+'</td></tr><tr><td>Var2</td><td>'+
    entry.var2+'</td></tr><tr><td>Var3</td><td>'+
    entry.var3+'</td></tr><tr><td>Var4</td><td>'+
    entry.var4+'</td></tr></table>';

    return tbl_body;
}

var json;
var htmltext = "The closest value to this is: ";

// run the euclid function on any value change
$("#var1").on("change", euclid);
$("#var2").on("change", euclid);
$("#var3").on("change", euclid);
$("#var4").on("change", euclid);
$("#disttype").bind("DOMSubtreeModified",euclid);

// load the dataset after everything else is loaded
$.get("assets/JSON/euclidbig.txt", function(data){
  json = $.parseJSON(data);
  for (var i=0; i<json.length; i++){
    json[i].dist=0;
  }
});
