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
	    if($('#' + this.id).hasClass("sel")){
	    	$('#' + this.id).removeClass("sel");
	    	$('.lang-jquery').closest('.card').show();
	    }
	    else{
	    	$('#' + this.id).addClass("sel");
	    	$('.lang-jquery').closest('.card').hide();
	    }
	}); 
});