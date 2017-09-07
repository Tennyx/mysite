var mouseOn = function(){
	$('#' + this.id + '-img').css({'filter':'grayscale(10%)'});
	$('#' + this.id).css({'color':'#5d8c46', 'background': '#c6c6c6'});
	$('#' + this.id + '-title').css({"color":"#5d8c46"});
}

var mouseOff = function(){
	$('#' + this.id + '-img').css({'filter':'grayscale(100%)'});
	$('#' + this.id).css({'color':'#5b5b5b', 'background': 'white'});
	$('#' + this.id + '-title').css({'color':'#5b5b5b'});
}

$(document).ready(function() {
	$('.card').hover(mouseOn, mouseOff);
});