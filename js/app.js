var update = $('#submit-btn'); 

update.click(function(event) {
	event.preventDefault(); 

var city = $('#city-type').val(); 
city = city.toLowerCase().trim();

if(city == 'new york city' || city == 'nyc' || city == 'new york') {
	$('body').attr('class', 'nyc'); 

} else if (city == 'san francisco' || city == 'sf' || city == 'san fran' || city == 'bay area') {
	$('body').attr('class', 'sf'); 

} else if (city == 'austin' || city == 'atx') {
	$('body').attr('class', 'austin');

} else if (city == 'los angeles' || city == 'la' || city == 'lax') {
	$('body').attr('class', 'la'); 

} else if (city == 'sydney' || city == 'syd') {
	$('body').attr('class', 'sydney'); 

} else {
	alert('You got the cat!');
	$('body').attr('class', 'cat'); 
}

$('#city-type').val('');

});