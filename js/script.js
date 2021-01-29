
$(document).ready(function () {


	$("#banba").mouseover(function(){
console.log('in')
		$('#banba-vid').attr('src','./fís/banba2.mp4')
	});

	

	$("#banba").mouseleave(function(){
		console.log('out')
				$('#banba-vid').attr('src','./fís/banba.mp4')
			});
			$(".geaga").mouseover(function(){
				console.log('in')
						$('#geaga').attr('src','./img/countZero2.png')
					});
				
					
				
					$(".geaga").mouseleave(function(){
						console.log('out')
								$('#geaga').attr('src','./img/countZero.png')
							});


 });





