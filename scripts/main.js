//only works @ https://www.codepen.io/metasci/pen/ONqKdE


//http://simpleweatherjs.com/


// cache DOM
var $nightClear = $('.wi-night-clear');
var $sun = $('.wi-day-sunny');
var $rain = $('.wi-rain');
var $cloud = $('.wi-cloudy');
var $storm = $('.wi-thunderstorm');
var $nightCloud = $('wi-night-alt-cloudy');
var $partCloud = $('.wi-day-cloudy');
var $snow = $('.wi-snowflake-cold');
var $location = $('.location');
var $temp = $('.temp');
var $weather = $('.weather');
var $units = $('.units');

var lat, lon;
var unit = 'f';




//use jquery simple weather

$(document).ready(function() {
     
    navigator.geolocation.getCurrentPosition(function(pos){
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;
        getWeather(lat+','+lon);
    });
    
    $units.on('click', function(){
        if(unit === 'f'){
            unit = 'c';
            $units.html('To<br>Fahrenheit');
        }else{
            unit = 'f';
            $units.html('To<br>Celcius');
        }
        getWeather(lat+','+lon);
    });
    
});



function getWeather(location, woeid){
    $.simpleWeather({
       location: location,
       woeid: woeid,
       unit: unit, //set to variable to change on demand with button
       success: function(info){
           $('img').attr('src',''+info.image);
           $location.html('<h2>'+info.city+', '+info.region+'</h2>');
           $temp.html('<p>'+info.temp+' &deg<span>'+info.units.temp+'</span></p>');
           $weather.html('<p>'+info.currently+'</p>'); //find all possible current weather options & set animations accordingly
       }
    });
}