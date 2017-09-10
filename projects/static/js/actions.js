var mouseOn = function(){
	$('#' + this.id + '-img').css({'filter':'grayscale(10%)'});
	$('#' + this.id).css({'color':'#5b5b5b', 'background': '#9eed65'});
	$('#' + this.id + '-title').css({"color":"#5b5b5b"});
}

var mouseOff = function(){
	$('#' + this.id + '-img').css({'filter':'grayscale(100%)'});
	$('#' + this.id).css({'color':'#5b5b5b', 'background': 'white'});
	$('#' + this.id + '-title').css({'color':'#5b5b5b'});
}

$(document).ready(function() {
	$('.card').hover(mouseOn, mouseOff);

	var showAll = false;

	var languages = {
		'jquery': 0,
		'python': 0,
		'reactjs': 0
	};

	var counter = 0;

	$('.lang-filter').click(function(){
		var clickedLanguage = $(this).text().substr(1);
		
		if(!$('#' + this.id).hasClass("sel")){
	    	$('#' + this.id).addClass("sel");
	    	languages[clickedLanguage] = 1;
	    }
	    else{
	    	$('#' + this.id).removeClass("sel");
	    	languages[clickedLanguage] = 0;
	    }

    	$('.card').hide();
	    
		for (var p in languages) {
	    	if( languages.hasOwnProperty(p) ) {
      			if(languages[p] == 1){
					$('.lang-' + p).closest('.card').show();
					counter += 1;
      			}
    		}
    	}

    	if(counter == 0){
    		$('.card').show();	
    	}

    	counter = 0;    
	}); 
});

