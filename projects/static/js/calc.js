$(document).ready(function() {
  var accum = [];
  var multiDigit = '';

  $("#decimal").click(function(){
    multiDigit += "."
    $("#accum").html(accum.join("") + multiDigit);
    $("#display").html(multiDigit);
  });
  
  $("#zero").click(function(){
    multiDigit += "0"
    $("#accum").html(accum.join("") + multiDigit);
    $("#display").html(multiDigit);
  });
  
  $("#one").click(function(){
    multiDigit += "1"
    $("#accum").html(accum.join("") + multiDigit);
    $("#display").html(multiDigit);
  });
  
  $("#two").click(function(){
     multiDigit += "2"
    $("#accum").html(accum.join("") + multiDigit);
     $("#display").html(multiDigit);
  });
  
  $("#three").click(function(){
    multiDigit += "3"
    $("#accum").html(accum.join("") + multiDigit);
     $("#display").html(multiDigit);
  });
  
  $("#four").click(function(){
    multiDigit += "4"
    $("#accum").html(accum.join("") + multiDigit);
     $("#display").html(multiDigit);
  });
  
  $("#five").click(function(){
    multiDigit += "5"
    $("#accum").html(accum.join("") + multiDigit);
     $("#display").html(multiDigit);
  });
  
  $("#six").click(function(){
    multiDigit += "6"
    $("#accum").html(accum.join("") + multiDigit);
     $("#display").html(multiDigit);
  });
  
  $("#seven").click(function(){
    multiDigit += "7"
    $("#accum").html(accum.join("") + multiDigit);
     $("#display").html(multiDigit);
  });
  
  $("#eight").click(function(){
    multiDigit += "8"
    $("#accum").html(accum.join("") + multiDigit);
     $("#display").html(multiDigit);
  });
  
  $("#nine").click(function(){
    multiDigit += "9"
    $("#accum").html(accum.join("") + multiDigit);
     $("#display").html(multiDigit);
  });
  
  $("#plus").click(function(){
    accum.push(multiDigit);
    multiDigit = '';
    accum.push("+");
     $("#display").html("+");
     $("#accum").html(accum);
  });
  
  $("#minus").click(function(){
    accum.push(multiDigit);
    multiDigit = '';
    accum.push("-");
    $("#display").html("-");
    $("#accum").html(accum);
  });
  
  $("#divide").click(function(){
    accum.push(multiDigit);
    multiDigit = '';
    accum.push("/");
    $("#display").html("/");
    $("#accum").html(accum);
  });
  
  $("#times").click(function(){
    accum.push(multiDigit);
    multiDigit = '';
    accum.push("*");
    $("#display").html("*");
    $("#accum").html(accum);
  });
  
  $("#clear").click(function(){
    accum = [];
    multiDigit = '';
     $("#display").html(0);
     $("#accum").html(0);
  });
  
  $("#equals").click(function(){
    accum.push(multiDigit);
    multiDigit = '';
    var total = accum.reduce(function(final, index){
      return final + index;
    });
    total = eval(total);
    total = parseFloat(total.toFixed(4))
    if (total.toString().length >11){
        $("#display").html("Too Large");
        accum = [];
        multiDigit ='';
    }
    else{
    accum = [];
    accum.push(total);
    $("#display").html(total);
    $("#accum").append("=" + total);
    }
  });
});