//JQuery AJAX API
function getInput() {
    userInput = $('#input').val();
};

  var button = $('#button');
  var yourWeather = $('#your-weather');
  var content1 = $('#content1');
  var content2 = $('#content2');
  var content3 = $('#content3');
  var closeWeather = $('#close');


button.click( function () {

  yourWeather.fadeIn(2000);
  yourWeather.css('display', 'flex');


          //Displays Current Weather
  $.ajax({
    type: 'GET',
    url:'http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&APPID=df1d7d76d4d3f62db00edd0ce244533e&units=imperial',
    success: function(weatherdata) {
        content1.html("");

        //displays data
        content1.append('<p id="first-p" onload="getImage()">'+ weatherdata.weather[0].description +'</p>');
        var tempF = weatherdata.main.temp.toFixed(0);
        content1.append('<p>Temperature: ' + tempF   +'&deg;F</p>');
        content1.append('<p id="high-low" style="font-size:.9rem;">Hi: ' + weatherdata.main.temp_max + "&deg;F &nbsp; Lo: " + weatherdata.main.temp_min + '&deg;F')
        content1.append('<p>Wind Speed: '+ weatherdata.wind.speed +'mph</p>')
    }

  });
        //Displays 5day forecast
  $.ajax({
    type:'GET',
    url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q='  + userInput  + '&APPID=df1d7d76d4d3f62db00edd0ce244533e&units=imperial&cnt=5',
    success: function(fiveDay) {
      content2.html('');

      content2.append('<p>Day 1: ' + fiveDay.list[0].weather[0].description + '</p>');
      content2.append('<p>Day 2: ' + fiveDay.list[1].weather[0].description + '</p>');
      content2.append('<p>Day 3: ' + fiveDay.list[2].weather[0].description + '</p>');
      content2.append('<p>Day 4: ' + fiveDay.list[3].weather[0].description  + '</p>');
      content2.append('<p>Day 5: ' + fiveDay.list[4].weather[0].description + '</p>');
    }
  });

  //displays micellaneous data
  $.ajax({
    type:'GET',
    url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q='  + userInput  + '&APPID=df1d7d76d4d3f62db00edd0ce244533e&units=imperial&cnt=5',
    success: function(misc) {
      content3.html('');

      content3.append('<p> Humidity: ' + misc.list[0].humidity + '%</p>');
      content3.append('<p> Wind Direction: ' + misc.list[0].deg  + '&deg;</p>');
      content3.append('<p> Morning Temp: ' + misc.list[0].temp.morn  + '&deg;F</p>');
      content3.append('<p> Night Temp: ' + misc.list[0].temp.night  + '&deg;F</p>');
      content3.append('<p> Cloudiness: ' + misc.list[0].clouds  + '%</p>');
    }

  });



});

//closes weather data
closeWeather.click( function() {
  yourWeather.fadeOut('slow');
});
