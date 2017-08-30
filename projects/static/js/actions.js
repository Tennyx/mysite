var mouseOn = function(){
	$('#' + this.id + '-img').css({'filter':'grayscale(10%)'});
	$('#' + this.id).css({'color':'#86D84B'});
	$('#' + this.id + '-title').css({"color":"#86D84B"});
}

var mouseOff = function(){
	$('#' + this.id + '-img').css({'filter':'grayscale(80%)'});
	$('#' + this.id).css({'color':'#5b5b5b'});
	$('#' + this.id + '-title').css({'color':'#5b5b5b'});
}

$(document).ready(function() {
	$('.card').hover(mouseOn, mouseOff);
});