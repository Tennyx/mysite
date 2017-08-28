var cardImages = {
	'calc': [
			'https://img.webnots.com/2017/04/Bootstrap-Card-Image.png',
			'http://i57.tinypic.com/10i5qhv.jpg'
			],
	'timer': [
			'https://img.webnots.com/2017/04/Bootstrap-Card-Image.png',
			'http://i57.tinypic.com/10i5qhv.jpg'
			]
};

$(document).ready(function() {

	$('.card').mouseover(function(){
		$('#' + this.id + '-img').attr('src', cardImages[this.id][1]);
		$('#' + this.id).css({'background-color':'#78C2AD','color':'white', 'border-color':'#78C2AD'});
		$('#' + this.id + '-title').css({"color":"white"});
	});
	
	$('.card').mouseout(function(){
		$('#' + this.id + '-img').attr('src',cardImages[this.id][0]);
		$('#' + this.id).css({'background-color':'white','color':'#5b5b5b', 'border-color': 'white'});
		$('#' + this.id + '-title').css({'color':'#5b5b5b'});
	});
});