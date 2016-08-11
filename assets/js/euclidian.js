var calculate = function(){

  var var1 = parseInt($("#var1").val()) || 0
  var var2 = parseInt($("#var2").val()) || 0
  var var3 = parseInt($("#var3").val()) || 0
  var var4 = parseInt($("#var4").val()) || 0

  var sum = var1+var2+var3+var4

  $("#output-block").html("<h1>"+sum+"</h1>");
}

var euclid = function(){
  var input = [parseInt($("#var1").val()) || 0,
               parseInt($("#var2").val()) || 0,
               parseInt($("#var3").val()) || 0,
               parseInt($("#var4").val()) || 0];


  $("#output-block").html("<h1>"+JSON.stringify(input)+"</h1>");
  for (var i=0; i<json.length; i++){
    console.log(i);
  }
}


$("#var1").on("change", euclid);
$("#var2").on("change", calculate);
$("#var3").on("change", calculate);
$("#var4").on("change", calculate);

var json;
$.get("assets/JSON/euclid.txt", function(data){
  json = $.parseJSON(data);
});
