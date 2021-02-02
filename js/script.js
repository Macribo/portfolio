
$(document).ready(function () {


	$("#banba").mouseover(function () {
		// alert();
		console.log('in')
		$('#banba-vid').attr('src', './vids/banba2.mp4')
	});



	$("#banba").mouseleave(function () {
		console.log('out')
		$('#banba-vid').attr('src', './vids/banba.mp4')
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





