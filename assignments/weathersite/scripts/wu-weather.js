// JavaSript Document
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/9d863fbb63d57795/conditions/q/MN/Franklin.json', true );

weatherObject.send();

weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('wspeed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('cw').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('currentF').innerHTML = weatherInfo.current_observation.forecast_url;
} 

//end of onload