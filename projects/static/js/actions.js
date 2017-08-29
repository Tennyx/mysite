var cardImages = {
	'calc': [
			'https://img.webnots.com/2017/04/Bootstrap-Card-Image.png',
			'http://i57.tinypic.com/10i5qhv.jpg'
			],
	'timer': [
			'http://i57.tinypic.com/10i5qhv.jpg',
			'https://img.webnots.com/2017/04/Bootstrap-Card-Image.png'
			]
};

var mouseOn = function(){
	console.log(this.id);
	$('#' + this.id + '-img').attr('src', cardImages[this.id][1]);
	$('#' + this.id).css({'background-color':'#78C2AD','color':'white', 'border-color':'#78C2AD'});
	$('#' + this.id + '-title').css({"color":"white"});
}

var mouseOff = function(){
	$('#' + this.id + '-img').attr('src',cardImages[this.id][0]);
	$('#' + this.id).css({'background-color':'white','color':'#5b5b5b', 'border-color': 'white'});
	$('#' + this.id + '-title').css({'color':'#5b5b5b'});
}

$(document).ready(function() {
	$('.card').hover(mouseOn, mouseOff);
});