
$(document).ready(function () {


	$("#banba").mouseover(function () {
		// alert();
		console.log('in')
		$('#banba-vid').attr('src', './img/banba_poster.png')
	});



	$("#banba").mouseleave(function () {
		console.log('out')
		$('#banba-vid').attr('src', 'src', './img/banba_poster.png')
	});


	$(".merch").mouseover(function () {
		// alert();
		// console.log('in')
		// $('#merch-poster').fadeIn()
	});



	$(".merch").mouseleave(function () {
		// console.log('out')
		// $('#merch-poster').fadeOut()

	});


	$(".geaga").mouseover(function () {
		console.log('in')
		// $('#geaga').attr('src', './img/countZero2.png')
	});



	$(".geaga").mouseleave(function () {
		console.log('out')
		// $('#geaga').attr('src', './img/countZero.png')
	});


});





