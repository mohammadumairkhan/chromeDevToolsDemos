function getTime(){
	$.ajax({
	  type: "GET",
	  url: "http://localhost:3000/api/time",
	  contentType: "application/json"
	}).done(function(time) {
    	$('.thing').show();
    	$('.time').html(time.time)
  	});
}