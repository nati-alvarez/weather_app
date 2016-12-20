
var news = document.getElementById('bulletin');
news.className = "scroll";
var  searchbar  = document.getElementById('input');
var button = document.getElementById('button');
var weatherIcon = document.getElementById('weather-icon')
var background = document.getElementsByTagName('video')[0];

//loads background-image according to season
var currentDate = new Date();
var currentMonth = currentDate.getMonth();

if (8 <= currentMonth < 11) {
  background.setAttribute('poster', 'leaves.gif');
}
else if (11 <= currentMonth < 2) {
  background.setAttribute('poster', 'winter.jpg');
}
else if (2 <= currentMonth < 5) {
  background.setAttribute('poster', 'spring.gif');
}
else {
  background.setAttribute('poster', 'summer.jpg');
}


//clears the search bar when its clicked for user convinience
function clearSearchbar() {
  searchbar.value = "";
};

//displays appropriate weather image

button.addEventListener('click', function() {
  setTimeout( function () {
  var text = document.getElementById('first-p').innerHTML;

  switch (text) {
    case 'light rain':
        weatherIcon.setAttribute('src', 'images/rain.gif');
      break;
    case 'rain':
        weatherIcon.setAttribute('src', 'images/rain.gif');
      break;
    case 'overcast clouds':
      weatherIcon.setAttribute('src', 'images/overcast.gif');
      break;
    case 'scattered clouds':
      weatherIcon.setAttribute('src', 'images/scattered.gif');
      break;
    case 'broken clouds':
      weatherIcon.setAttribute('src', 'images/scattered.gif');
      break;
    case 'clear sky':
      weatherIcon.setAttribute('src', 'images/sunny.gif');
      break;
    case 'drizzle':
      weatherIcon.setAttribute('src', 'images/drizzle.gif');
      break;
  };

}, 1000);
});
