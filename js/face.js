jQuery(document).ready(function ($){
	$('#inner').on('mouseenter mouseleave', function(e){
		$face = $('#face_inner');
		$mouth = $('#mouth');
		var t = 0;
		face_offset = $face.offset();
		mouth_offset = $mouth.position();
		switch(e.type) {
			case 'mouseenter':
				pageX = e.pageX;
				pageY = e.pageY;
				hap = {
					'left' : e.pageX - face_offset.left - mouth_offset.left - $mouth.width() - 7,
					'top'  : e.pageY - face_offset.top - mouth_offset.top - $mouth.height() + 40
				};
				if((e.pageX - face_offset.left - 16) <= $face.width()/2){
					$('#face_cont').addClass('flip');
					hap.left = -1 * (hap.left + 46);
					hap.top = -1 * (hap.top + 5);
				}else{
					$('#face_cont').css({left:0});
					$('#face_cont').removeClass('flip');
				}
				$('#face_inner').css({'top':hap.top,'left':hap.left});
				setTimeout(function(){
					$('#face_inner').css({'top':0,'left':-16});
					$('#inner').on('mousemove', function(e){
									window.clearTimeout(t);
									$('#face_cont').addClass('shake');
									pageY = e.pageY;
									pageX = e.pageX;
									t = window.setTimeout(function(){
										$('#face_cont').removeClass('shake');
									},100)
								})
				},250);

			break;
			case 'mouseleave':
				$('#face_cont').removeClass('shake');
				$('#inner').off('mousemove');
			break;
		}
	});

})
