
$(document).ready(function () {


	$("#banba").mouseover(function(){
console.log('in')
		$('#banba-vid').attr('src','./fís/banba2.mp4')
	});

	

	$("#banba").mouseleave(function(){
		console.log('out')
				$('#banba-vid').attr('src','./fís/banba.mp4')
			});

 });





