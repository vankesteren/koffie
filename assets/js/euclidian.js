var euclid = function(){
  var input = [parseInt($("#var1").val()) || 0,
               parseInt($("#var2").val()) || 0,
               parseInt($("#var3").val()) || 0,
               parseInt($("#var4").val()) || 0];

  var clone = json.slice(0)

  for (var i=0; i<clone.length; i++){
    var compare = $.map(clone[i], function(el) { return(el) }).slice(1);
    clone[i].dist = Math.sqrt(math.dot(input,compare));
  }

  var closest = sortJSON(clone,"dist")[0];

  $("#output-block").html("")
    .append("<h1>"+htmltext+closest.name+"</h1>")
    .append("<p>"+JSON.stringify(closest)+"</p>");
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

var json;
var htmltext = "The closest value to this is: ";

// run the euclid function on any value change
$("#var1").on("change", euclid);
$("#var2").on("change", euclid);
$("#var3").on("change", euclid);
$("#var4").on("change", euclid);

// load the dataset after everything else is loaded
$.get("assets/JSON/euclidbig.txt", function(data){
  json = $.parseJSON(data);
});
