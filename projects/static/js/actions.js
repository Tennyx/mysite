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

	$('.lang-filter').click(function(){
		var clickedLanguage = $(this).text().substr(1);
		var languages = {
			'showAll': true,
			'jquery': false,
			'python': false,
			'reactjs': false
		};

	    if(!$('#' + this.id).hasClass("sel")){
	    	$('#' + this.id).addClass("sel");
	    	languages[clickedLanguage] = true;
	    	languages.showAll = false;
	    }
	    else{
	    	$('#' + this.id).removeClass("sel");
	    	languages[clickedLanguage] = false;
	    }

	    if(languages['showAll']){
	    	$('.card').show();	
	    }
	    else{
		    for (var p in languages) {
	    		if( languages.hasOwnProperty(p) ) {
	      			if(!languages[p]){
	      				console.log(languages[p]);
	      				$('.lang-' + p).closest('.card').hide();
	      			}
	      			else{
	      				$('.lang-' + p).closest('.card').show();	
	      			}
	    		} 
	  		}   
	   	} 
	}); 
});

