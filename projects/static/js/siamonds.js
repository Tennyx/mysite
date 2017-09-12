function randInt(){
  return Math.floor((Math.random() * 4));
}

function failSound(){
  var failFile = new Audio("http://caleswitzer.com/here/wp-content/uploads/2017/03/buzz.mp3");
  failFile.play();
}

var colors = {
  autoRed : function(){
    var audio = new Audio("http://caleswitzer.com/here/wp-content/uploads/2017/03/SOUND_1.mp3");
    $('.red').css('background','white');
    audio.play(); 
    setTimeout(function(){
      $('.red').css('background','white');
      $('.red').css('box-shadow','0 5px 155px rgba(145, 92, 182, .7');
      setTimeout(function(){
        $('.red').css('background','#ff2626');
        $('.red').css('box-shadow','0 5px 155px rgba(145, 92, 182, 0');
      }, 300);
    }, 50);
  },

  autoGreen : function(){
    var audio = new Audio("http://caleswitzer.com/here/wp-content/uploads/2017/03/SOUND_2.mp3");
    $('.green').css('background','white');
    audio.play(); 
    setTimeout(function(){
      $('.green').css('background','white');
      $('.green').css('box-shadow','0 5px 155px rgba(145, 92, 182, .7');
      setTimeout(function(){
        $('.green').css('background','#00ff59');
        $('.green').css('box-shadow','0 5px 155px rgba(145, 92, 182, 0');
      }, 300);
    }, 50);
  },

  autoOrange : function(){
    var audio = new Audio("http://caleswitzer.com/here/wp-content/uploads/2017/03/SOUND_3.mp3");
    $('.orange').css('background','white');
    audio.play(); 
    setTimeout(function(){
      $('.orange').css('background','white');
      $('.orange').css('box-shadow','0 5px 155px rgba(145, 92, 182, .7');
      setTimeout(function(){
        $('.orange').css('background','#ffaa00');
        $('.orange').css('box-shadow','0 5px 155px rgba(145, 92, 182, 0');
      }, 300);
    }, 50);
  },

  autoBlue : function(){
    var audio = new Audio("http://caleswitzer.com/here/wp-content/uploads/2017/03/SOUND_4.mp3");
    $('.blue').css('background','white');
    audio.play(); 
    setTimeout(function(){
      $('.blue').css('background','white');
      $('.blue').css('box-shadow','0 5px 155px rgba(145, 92, 182, .7');
      setTimeout(function(){
        $('.blue').css('background','#00bfff');
        $('.blue').css('box-shadow','0 5px 155px rgba(145, 92, 182, 0');
      }, 300);
    }, 50);
  },
  
  pushRed : function(){
    var audio = new Audio("http://caleswitzer.com/here/wp-content/uploads/2017/03/SOUND_1.mp3");
    $('.red').css('background','white');
    audio.play(); 
    setTimeout(function(){
      $('.red').css('background','white');
      $('.red').css('box-shadow','0 5px 155px rgba(145, 92, 182, .7');
      setTimeout(function(){
        $('.red').css('background','#ff2626');
        $('.red').css('box-shadow','0 5px 155px rgba(145, 92, 182, 0');
      }, 300);
    }, 50);
  },

  pushGreen : function(){
    var audio = new Audio("http://caleswitzer.com/here/wp-content/uploads/2017/03/SOUND_2.mp3");
    $('.green').css('background','white');
    audio.play(); 
    setTimeout(function(){
      $('.green').css('background','white');
      $('.green').css('box-shadow','0 5px 155px rgba(145, 92, 182, .7');
      setTimeout(function(){
        $('.green').css('background','#00ff59');
        $('.green').css('box-shadow','0 5px 155px rgba(145, 92, 182, 0');
      }, 300);
    }, 50);
  },

  pushOrange : function(){
    var audio = new Audio("http://caleswitzer.com/here/wp-content/uploads/2017/03/SOUND_3.mp3");
    $('.orange').css('background','white');
    audio.play(); 
    setTimeout(function(){
      $('.orange').css('background','white');
      $('.orange').css('box-shadow','0 5px 155px rgba(145, 92, 182, .7');
      setTimeout(function(){
        $('.orange').css('background','#ffaa00');
        $('.orange').css('box-shadow','0 5px 155px rgba(145, 92, 182, 0');
      }, 300);
    }, 50);
  },

  pushBlue : function(){
    var audio = new Audio("http://caleswitzer.com/here/wp-content/uploads/2017/03/SOUND_4.mp3");
    $('.blue').css('background','white');
    audio.play(); 
    setTimeout(function(){
      $('.blue').css('background','white');
      $('.blue').css('box-shadow','0 5px 155px rgba(145, 92, 182, .7');
      setTimeout(function(){
        $('.blue').css('background','#00bfff');
        $('.blue').css('box-shadow','0 5px 155px rgba(145, 92, 182, 0');
      }, 300);
    }, 50);
  }
}

var i = 0;    
var simonArr = [];

function myLoop () {          
  setTimeout(function () {    
    switch(simonArr[i]){
      case 0:
        colors.autoRed();
        break;
      case 1:
        colors.autoGreen();
        break;
      case 2:
        colors.autoOrange();
        break;
      case 3:
        colors.autoBlue();
        break;
    }         
    i++;                     
    if (i < simonArr.length) {            
      myLoop();             
    }                        
  }, 500)
} 

function disable(){
  $(".btn-primary").prop("disabled",true);
}

function enable(){
  $(".btn-primary").prop("disabled",false);
}  

var mode = false;

$(document).ready(function(){
  $('#mode').on('click', function(){
    if($('#strict').html() == 'Strict Mode: Off'){
      $('#strict').html('Strict Mode: On');
      mode = true;
    }
    else{
      $('#strict').html('Strict Mode: Off');
      mode = false;
    }
  });
    
  var counter = 0;

  $('#start').on('click', function(){
    $('#start').remove();
    $('#btnholder').append('<button id="reset" class="btn btn-info">RESET</button>');
  
    simonArr = [];
    simonArr.push(randInt());
      
    $('.overlay').html(1);
    i = 0;
    counter = 0;
    myLoop();

    function success(){
      counter++;  
      if(counter == 20){
        colors.pushRed();
        colors.pushGreen();
        colors.pushOrange();
        colors.pushBlue();
        $('.overlay').html('You Win!');
        disable();
      }
      else if(counter == simonArr.length){
        colors.pushRed();
        colors.pushGreen();
        colors.pushOrange();
        colors.pushBlue();
        simonArr.push(randInt());
        $('.overlay').html(simonArr.length);
        counter = 0;
        i=0;
        setTimeout(function(){
          myLoop();
        }, 500);
      }
    }

    function fail(){
      failSound();
      $('.overlay').html('Fail!');
      i = 0;
      counter = 0;
      
      if(mode){
        simonArr = [];
        simonArr.push(randInt());
        enable();
        setTimeout(function(){
          $('.overlay').html(1);
          myLoop();
        }, 1500);
      }
      else{
        setTimeout(function(){
          $('.overlay').html(simonArr.length);
          myLoop();
        }, 1500);
      }
    }

    $('.red').on('click',function(){
      if(simonArr[counter] == 0){
        colors.pushRed();
        success();
      }
      else{
        fail(); 
      }
    });

    $('.green').on('click',function(){
      if(simonArr[counter] == 1){
        colors.pushGreen();
        success();
      }
      else{
        fail();
      }
    });

    $('.orange').on('click',function(){
      if(simonArr[counter] == 2){
        colors.pushOrange();
        success();
      }
      else{
        fail();
      }
    });

    $('.blue').on('click',function(){
      if(simonArr[counter] == 3){
        colors.pushBlue();
        success();
      }
      else{
        fail();
      }
    });

    $('#reset').on('click', function(){
         simonArr = []
         simonArr.push(randInt());
         enable();
         $('.overlay').html(1);
         i = 0;
         counter = 0;
         myLoop();
    }); 
  });    
});      
