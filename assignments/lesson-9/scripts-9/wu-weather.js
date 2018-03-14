// JavaSript Document
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/9d863fbb63d57795/conditions/q/MN/Franklin.json', 'true');

weatherObject.send();

weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
} 

//end of onload