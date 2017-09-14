var xoState = 'X';

var xo = [
          '0','1','2',
          '3','4','5',
          '6','7','8'
          ];

var xoSwitch = {
                'X':'O',
                'O':'X'
                };

var drawCount = 0;

function buildTable(p){
  $('#tab').append(
  '<tr>\
    <td class="sq" id="box0"></td>\
    <td class="sq" id="box1"></td>\
    <td class="sq" id="box2"></td>\
  </tr>\
  <tr>\
    <td class="sq" id="box3"></td>\
    <td class="sq" id="box4"></td>\
    <td class="sq" id="box5"></td>\
  </tr>\
  <tr>\
    <td class="sq" id="box6"></td>\
    <td class="sq" id="box7"></td>\
    <td class="sq" id="box8"></td>\
  </tr>');
  
  $('#open').remove();
  $('#player').html("X starts.");

  if(p == 'one'){
    var rand = Math.floor((Math.random() * 8) + 1);
    $('#box' + rand.toString()).html('X');
    xo[rand] = xoState;
    xoState = xoSwitch[xoState];
    $('#player').html(xoState + "'s turn.");
    drawCount += 1;
  }
}

function gameOver(board){
  var winningCombos = [
                      [0,1,2],
                      [3,4,5],
                      [6,7,8],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [0,4,8],
                      [2,4,6]
                      ];

  for(i=0;i<winningCombos.length;i++){
    var combo = winningCombos[i];
    if( (board[combo[0]] == board[combo[1]]) && (board[combo[0]] == board[combo[2]]) ){
      gameOverAlert('win');
      return;
    }
  }
  drawCount += 1;
  
  if(drawCount == 9){
    gameOverAlert('draw');
  }
}

function gameOverAlert(results){
  if(results == 'draw'){
    var result = 'Draw!'
  }
  if(results == 'win'){
    var result = xoSwitch[xoState] + ' Wins!'
  }
  $('#overholder').append(
    '<div class="overlay text-center">\
      <div id="winner">' + result + '</div>\
       Care to play again?\
      <br>\
      <button id="menu" class="btn btn-info">Menu</button>\
    </div>'
    )
  $('#player').remove();
  menu();
}

function menu(){
  $('#menu').on('click', function() {
      history.go(0);
  });
}

function actions(players){
  buildTable(players);
  $('.sq').on('click', function() {
    if(!isNaN($(this).html())){
      $(this).html(xoState);
      xo[this.id[3]] = xoState;
      xoState = xoSwitch[xoState];
      $('#player').html(xoState + "'s turn.");
      gameOver(xo);
    }
  });
}

$(document).ready(function(){

// function win1(){
//   if(($('#box1').html() && $('#box2').html() && $('#box3').html())){
//     if(($('#box1').html() == $('#box2').html() && $('#box1').html() == $('#box3').html())){
//       if($('#box1').html() == 'X'){
//         $('#test').html('Player 1 Wins!');
//         overlayX();
//       }
//       else{
//         $('#test').html('Player 2 Wins!');
//         overlayO();
//       }
//     }  
//   }
// }
// function win2(){
//   if(($('#box1').html() && $('#box4').html() && $('#box7').html())){
//     if(($('#box1').html() == $('#box4').html() && $('#box1').html() == $('#box7').html())){
//       if($('#box1').html() == 'X'){
//         $('#test').html('Player 1 Wins!');
//         overlayX();
//       }
//       else{
//         $('#test').html('Player 2 Wins!');
//         overlayO();
//       }
//     }  
//   }
// }
// function win3(){
//   if(($('#box1').html() && $('#box5').html() && $('#box9').html())){
//     if(($('#box1').html() == $('#box5').html() && $('#box1').html() == $('#box9').html())){
//       if($('#box1').html() == 'X'){
//         $('#test').html('Player 1 Wins!');
//         overlayX();
//       }
//       else{
//         $('#test').html('Player 2 Wins!');
//         overlayO();
//       }
//     }  
//   }
// }
// function win4(){
//   if(($('#box2').html() && $('#box5').html() && $('#box8').html())){
//     if(($('#box2').html() == $('#box5').html() && $('#box2').html() == $('#box8').html())){
//       if($('#box2').html() == 'X'){
//         $('#test').html('Player 1 Wins!');
//         overlayX();
//       }
//       else{
//         $('#test').html('Player 2 Wins!');
//         overlayO();
//       }
//     }  
//   }
// }
// function win5(){
//   if(($('#box3').html() && $('#box5').html() && $('#box7').html())){
//     if(($('#box3').html() == $('#box5').html() && $('#box3').html() == $('#box7').html())){
//       if($('#box3').html() == 'X'){
//         $('#test').html('Player 1 Wins!');
//         overlayX();
//       }
//       else{
//         $('#test').html('Player 2 Wins!');
//         overlayO();
//       }
//     }  
//   }
// }
// function win6(){
//   if(($('#box3').html() && $('#box6').html() && $('#box9').html())){
//     if(($('#box3').html() == $('#box6').html() && $('#box3').html() == $('#box9').html())){
//       if($('#box3').html() == 'X'){
//         $('#test').html('Player 1 Wins!');
//         overlayX();
//       }
//       else{
//         $('#test').html('Player 2 Wins!');
//         overlayO();
//       }
//     }  
//   }
// }
// function win7(){
//   if(($('#box4').html() && $('#box5').html() && $('#box6').html())){
//     if(($('#box4').html() == $('#box5').html() && $('#box4').html() == $('#box6').html())){
//       if($('#box4').html() == 'X'){
//         $('#test').html('Player 1 Wins!');
//         overlayX();
//       }
//       else{
//         $('#test').html('Player 2 Wins!');
//         overlayO();
//       }
//     }  
//   }
// }
// function win8(){
//   if(($('#box7').html() && $('#box8').html() && $('#box9').html())){
//     if(($('#box7').html() == $('#box8').html() && $('#box7').html() == $('#box9').html())){
//       if($('#box7').html() == 'X'){
//         $('#test').html('Player 1 Wins!');
//         overlayX();
//       }
//       else{
//         $('#test').html('Player 2 Wins!');
//         overlayO();
//       }
//     }  
//   }
// }
// function draw(){
//   for(i=0;i<10;i++){
//       var b = '#box' + i.toString();
//       if($(b).html() == ''){
//         return; 
//       }
//     }
//   $('#overholder').append('<div class="overlay text-center"><h3 id="test">It\'s a draw!</h3>Care to play again?<br><button id="menu" class="btn btn-info">Menu</button></div>');
//  }
// function marksTheSpot(box){
//   if($(box).html() == ''){
//     if($('#player').html() == "Player 1(X): You're Up!"){
//       $(box).html('X');
//       $('#player').html("Player 2(O): You're Up!");
//       win1();
//       win2();
//       win3();
//       win4();
//       win5();
//       win6();
//       win7();
//       win8();
//       draw();
//     }
//     else{
//       $(box).html('O');
//       $('#player').html("Player 1(X): You're Up!");
//       win1();
//       win2();
//       win3();
//       win4();
//       win5();
//       win6();
//       win7();
//       win8();
//       draw();
//     }
//   }
// }
// function marksTheSpotCompO(box){
//   if($(box).html() == ''){
//     if($('#player').html() == "Player 1(X): You're Up!"){
//       $(box).html('X');
//     }
//   }
// }
// function marksTheSpotCompX(box){
//   if($(box).html() == ''){
//     if($('#player').html() == "Player 2(O): You're Up!"){
//       $(box).html('O');
//     }
//   }
// }
// function compO(){
//   if($('#box1').html() == 'X' && $('#box2').html() == 'X' && $('#box3').html() == ''){
//     $('#box3').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box1').html() == 'X' && $('#box3').html() == 'X' && $('#box2').html() == ''){
//     $('#box2').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box2').html() == 'X' && $('#box3').html() == 'X' && $('#box1').html() == ''){
//     $('#box1').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box2').html() == 'X' && $('#box3').html() == 'X' && $('#box1').html() == ''){
//     $('#box1').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box1').html() == 'X' && $('#box5').html() == 'X' && $('#box9').html() == ''){
//     $('#box9').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box1').html() == 'X' && $('#box9').html() == 'X' && $('#box5').html() == ''){
//     $('#box5').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box5').html() == 'X' && $('#box9').html() == 'X' && $('#box1').html() == ''){
//     $('#box1').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box1').html() == 'X' && $('#box4').html() == 'X' && $('#box7').html() == ''){
//     $('#box7').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box1').html() == 'X' && $('#box7').html() == 'X' && $('#box4').html() == ''){
//     $('#box4').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box4').html() == 'X' && $('#box7').html() == 'X' && $('#box1').html() == ''){
//     $('#box1').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box4').html() == 'X' && $('#box5').html() == 'X' && $('#box6').html() == ''){
//     $('#box6').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box4').html() == 'X' && $('#box6').html() == 'X' && $('#box5').html() == ''){
//     $('#box5').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box5').html() == 'X' && $('#box6').html() == 'X' && $('#box4').html() == ''){
//     $('#box4').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box7').html() == 'X' && $('#box5').html() == 'X' && $('#box3').html() == ''){
//     $('#box3').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box7').html() == 'X' && $('#box3').html() == 'X' && $('#box5').html() == ''){
//     $('#box5').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box3').html() == 'X' && $('#box5').html() == 'X' && $('#box7').html() == ''){
//     $('#box7').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box7').html() == 'X' && $('#box8').html() == 'X' && $('#box9').html() == ''){
//     $('#box9').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box7').html() == 'X' && $('#box9').html() == 'X' && $('#box8').html() == ''){
//     $('#box8').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box8').html() == 'X' && $('#box9').html() == 'X' && $('#box7').html() == ''){
//     $('#box7').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box2').html() == 'X' && $('#box5').html() == 'X' && $('#box8').html() == ''){
//     $('#box8').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box2').html() == 'X' && $('#box8').html() == 'X' && $('#box5').html() == ''){
//     $('#box5').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box5').html() == 'X' && $('#box8').html() == 'X' && $('#box2').html() == ''){
//     $('#box2').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box3').html() == 'X' && $('#box6').html() == 'X' && $('#box9').html() == ''){
//     $('#box9').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box3').html() == 'X' && $('#box9').html() == 'X' && $('#box6').html() == ''){
//     $('#box6').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box6').html() == 'X' && $('#box9').html() == 'X' && $('#box3').html() == ''){
//     $('#box3').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else if($('#box5').html() == ''){
//     $('#box5').html('O');
//     $('#player').html() == "Player 1(X): You're Up!";
//   }
//   else{
//     for(i=0;i<9;i++){
//       var b = '#box' + i.toString();
//       if($(b).html() == ''){
//         $(b).html('O');
//         $('#player').html() == "Player 1(X): You're Up!";
//         break;
//       }
//     }
//   }
// }
// function compX(){
//   if($('#box1').html() == 'O' && $('#box2').html() == 'O' && $('#box3').html() == ''){
//     $('#box3').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box1').html() == 'O' && $('#box3').html() == 'O' && $('#box2').html() == ''){
//     $('#box2').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box2').html() == 'O' && $('#box3').html() == 'O' && $('#box1').html() == ''){
//     $('#box1').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box2').html() == 'O' && $('#box3').html() == 'O' && $('#box1').html() == ''){
//     $('#box1').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box1').html() == 'O' && $('#box5').html() == 'O' && $('#box9').html() == ''){
//     $('#box9').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box1').html() == 'O' && $('#box9').html() == 'O' && $('#box5').html() == ''){
//     $('#box5').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box5').html() == 'O' && $('#box9').html() == 'O' && $('#box1').html() == ''){
//     $('#box1').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box1').html() == 'O' && $('#box4').html() == 'O' && $('#box7').html() == ''){
//     $('#box7').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box1').html() == 'O' && $('#box7').html() == 'O' && $('#box4').html() == ''){
//     $('#box4').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box4').html() == 'O' && $('#box7').html() == 'O' && $('#box1').html() == ''){
//     $('#box1').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box4').html() == 'O' && $('#box5').html() == 'O' && $('#box6').html() == ''){
//     $('#box6').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box4').html() == 'O' && $('#box6').html() == 'O' && $('#box5').html() == ''){
//     $('#box5').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box5').html() == 'O' && $('#box6').html() == 'O' && $('#box4').html() == ''){
//     $('#box4').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box7').html() == 'O' && $('#box5').html() == 'O' && $('#box3').html() == ''){
//     $('#box3').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box7').html() == 'O' && $('#box3').html() == 'O' && $('#box5').html() == ''){
//     $('#box5').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box3').html() == 'O' && $('#box5').html() == 'O' && $('#box7').html() == ''){
//     $('#box7').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box7').html() == 'O' && $('#box8').html() == 'O' && $('#box9').html() == ''){
//     $('#box9').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box7').html() == 'O' && $('#box9').html() == 'O' && $('#box8').html() == ''){
//     $('#box8').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box8').html() == 'O' && $('#box9').html() == 'O' && $('#box7').html() == ''){
//     $('#box7').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box2').html() == 'O' && $('#box5').html() == 'O' && $('#box8').html() == ''){
//     $('#box8').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box2').html() == 'O' && $('#box8').html() == 'O' && $('#box5').html() == ''){
//     $('#box5').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box5').html() == 'O' && $('#box8').html() == 'O' && $('#box2').html() == ''){
//     $('#box2').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box3').html() == 'O' && $('#box6').html() == 'O' && $('#box9').html() == ''){
//     $('#box9').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box3').html() == 'O' && $('#box9').html() == 'O' && $('#box6').html() == ''){
//     $('#box6').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box6').html() == 'O' && $('#box9').html() == 'O' && $('#box3').html() == ''){
//     $('#box3').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else if($('#box5').html() == ''){
//     $('#box5').html('X');
//     $('#player').html() == "Player 2(O): You're Up!";
//   }
//   else{
//     for(i=0;i<9;i++){
//       var b = '#box' + i.toString();
//       if($(b).html() == ''){
//         $(b).html('X');
//         $('#player').html() == "Player 2(O): You're Up!";
//         break;
//       }
//     }
//   }
// }
  

$('#oneplayer').on('click', function(){
    $("#question").html("Would you prefer X or O?");
    $("#oneplayer").remove();
    $("#twoplayer").remove();
    $('#open').append('<button id="xbutton" class="btn btn-info">X</button>');
    $('#open').append('<button id="obutton" class="btn btn-info">O</button>');
  
  
    $("#xbutton").on("click",function(){
      actions();
    });

    $("#obutton").on("click",function(){
      actions('one');
    });


});
    
//       $('#player').html("Player 1(X): You're Up!");

//       $('#box1').on('click', function() {
//         marksTheSpotCompO('#box1');
//         compO();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
//       });

//       $('#box2').on('click', function() {
//         marksTheSpotCompO('#box2');
//         compO();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
//       }); 

//       $('#box3').on('click', function() {
//         marksTheSpotCompO('#box3');
//         compO();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
//       });  

//       $('#box4').on('click', function() {
//         marksTheSpotCompO('#box4');
//         compO();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
//       });

//       $('#box5').on('click', function() {
//         marksTheSpotCompO('#box5');
//         compO();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
//       });

//       $('#box6').on('click', function() {
//         marksTheSpotCompO('#box6');
//         compO();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
//       });

//       $('#box7').on('click', function() {
//         marksTheSpotCompO('#box7');
//         compO();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
//       }); 

//       $('#box8').on('click', function() {
//         marksTheSpotCompO('#box8');
//         compO();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
//       });

//       $('#box9').on('click', function() {
//         marksTheSpotCompO('#box9');
//         compO();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
//     });
//   });
//     $("#obutton").on("click",function(){
//         buildTableCompX();
  
//       $('#player').html("Player 2(O): You're Up!");

//       $('#box1').on('click', function() {
//         marksTheSpotCompX('#box1');
//         compX();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
//       });

//       $('#box2').on('click', function() {
//         marksTheSpotCompX('#box2');
//         compX();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
//       }); 

//       $('#box3').on('click', function() {
//         marksTheSpotCompX('#box3');
//         compX();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
//       });  

//       $('#box4').on('click', function() {
//         marksTheSpotCompX('#box4');
//         compX();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
        
//       });

//       $('#box5').on('click', function() {
//         marksTheSpotCompX('#box5');
//         compX();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
       
//       });

//       $('#box6').on('click', function() {
//         marksTheSpotCompX('#box6');
//         compX();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
        
//       });

//       $('#box7').on('click', function() {
//         marksTheSpotCompX('#box7');
//         compX();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
        
//       }); 

//       $('#box8').on('click', function() {
//         marksTheSpotCompX('#box8');
//         compX();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
        
//       });

//       $('#box9').on('click', function() {
//         marksTheSpotCompX('#box9');
//         compX();
//         win1();
//         win2();
//         win3();
//         win4();
//         win5();
//         win6();
//         win7();
//         win8();
//         draw();
//         menu();
        
//     });
//   });

// });
  
  

  $('#twoplayer').on('click', function(){
    actions();
  });



  
});