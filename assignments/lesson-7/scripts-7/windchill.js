// f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16--this is the equation to use for windchill function//
   // f = wind chill factor in Fahrenheit//
   // t is the air average temperature in Fahrenheit//
   // s is the wind speed in miles per hour//
    
var high = parseFloat(document.getElementById('high').innerHTML);
var low = parseFloat(document.getElementById('low').innerHTML);
var tempA = parseFloat((high + low) / 2);
var wspeed = parseFloat(document.getElementById('wspeed').innerHTML);
var wcfactor = parseFloat(35.74 + 0.6215 * tempA + (0.4275 * tempA - 35.75) * Math.pow(wspeed, 0.16));

document.getElementById('output').innerHTML = +wcfactor.toFixed(0);


   
    