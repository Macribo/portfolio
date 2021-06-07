
$(document).ready(function () {
setTimeout(function(){$(".overlay-ga").fadeIn()},1500);
	$(".banba-overlay").mouseover(function () {
		
		$(".banba-overlay").html(`<p class="overlay-eng">Such is the power of love in gentle mind,
		</p><p class="overlay-eng">That it can alter all the course of kind.</p>`)
	});
	$(".banba-overlay").mouseleave(function () {
		$(".overlay-ga").fadeIn()
		$(".banba-overlay").html(`<p class="overlay-ga">Athrughadh grá i aigne lách treoir cinne</p>`)
		$(".overlay-ga").css({'display':'block !important'});
		$(".banba-overlay").fadeIn()
		$(".overlay-ga").addClass('show-overlay')

	});
	$(".banba-overlay").on('click',()=>{
		window.location = "http://167.172.184.73:3000/history";
	});


});