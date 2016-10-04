var lat;
var lon;
var scale = "imperial";
var weatherData;

    $("#metric").click(function() {
        console.log("Changed to metric");
        scale = "metric";
        downloadWeather()
    });

    $("#imperial").click(function() {
        console.log("Changed to imperial");
        scale = "imperial";
        downloadWeather()
    });

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
}

function updateWeather() {
    console.log(weatherData);
    $("#status").text("");
    $("#city-name").text(weatherData.name);
    if(scale == "imperial") {
        $("#temperature").text(weatherData.main.temp + " F");
        $("#current-wind").text(weatherData.wind.speed + " mph");
    } else {
        $("#temperature").text(weatherData.main.temp + " C");
        $("#current-wind").text(weatherData.wind.speed + " kph");
    }

    $("#conditions").text(weatherData.weather[0].description);

    // Adding weather icon
    var iconText = weatherData.weather[0].main.toLowerCase();
    console.log(iconText);

    if(iconText.includes("clouds")) {
        $("i").addClass("fa fa-cloud fa-3x");
    } else if(iconText.includes("sun")) {
        $("i").addClass("fa fa-sun-o fa-3x");
    } else if(iconText.includes("rain")) {
        $("i").addClass("fa fa-tint fa-3x");
    } else if (iconText.includes("storm")) {
        $("i").addClass("fa fa-bolt fa-3x");
    } else {
        $("i").addClass("fa fa-skyatlas fa-3x");
    }
}
