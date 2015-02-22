function getTime (){

	$('.thing').hide();
	$('.time').html('');

	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/api/time',
		contentType: 'application/json'
	}).done(function (time){
		$('.thing').show().removeClass('bounceIn').addClass('bounceIn');
		$('.time').html(time.time);
	});

}