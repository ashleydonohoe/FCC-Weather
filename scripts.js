var lat;
var lon;
var scale = "imperial";
var weatherData;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        downloadWeather();
    });
} else {
    alert("Geolocation failed!");
}

function downloadWeather() {
    var weatherURL= "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=327d6da12d644fdfcabcfa843950f0ee&units="+ scale;
    console.log(weatherURL);

    $.getJSON(weatherURL, displayWeatherInfo).fail(function() {
        console.log("This failed");
    });
}

function displayWeatherInfo(data) {
    weatherData = data;
    updateWeather();
    // $("#city-name").text(data.name);
    // $("#temperature").text(data.main.temp + " F");
    // $("#conditions").text(data.weather[0].description);
    // $("#current-wind").text(data.wind.speed + " mph");
    //
    // // Adding weather icon
    // var iconText = data.weather[0].main.toLowerCase();
    // console.log(iconText);
    //
    // if(iconText.includes("clouds")) {
    //     $("i").addClass("fa fa-cloud fa-3x");
    // } else if(iconText.includes("sun")) {
    //     $("i").addClass("fa fa-sun-o fa-3x");
    // } else if(iconText.includes("rain")) {
    //     $("i").addClass("fa fa-tint fa-3x");
    // } else if (iconText.includes("storm")) {
    //     $("i").addClass("fa fa-bolt fa-3x");
    // } else {
    //     $("i").addClass("fa fa-skyatlas fa-3x");
    // }
}

function updateWeather() {
    console.log(weatherData);
}
