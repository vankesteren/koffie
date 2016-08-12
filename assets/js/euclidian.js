var euclid = function(){
  var input = [parseInt($("#var1").val()) || 0,
               parseInt($("#var2").val()) || 0,
               parseInt($("#var3").val()) || 0,
               parseInt($("#var4").val()) || 0];

  var clone = json.slice(0)

  for (var i=0; i<json.length; i++){
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

var randomise = function(){
  $("#var1").val(Math.random() * 10);
  $("#var2").val(Math.random() * 10);
  $("#var3").val(Math.random() * 10);
  $("#var4").val(Math.random() * 10);
  euclid();
}

var json;

var htmltext = "The closest value to this is: ";

$("#var1").on("change", euclid);
$("#var2").on("change", euclid);
$("#var3").on("change", euclid);
$("#var4").on("change", euclid);

$.get("assets/JSON/euclid.txt", function(data){
  json = $.parseJSON(data);
});
