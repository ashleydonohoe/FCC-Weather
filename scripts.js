var lat;
var lon;


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(downloadWeatherInfo);
} else {
    alert("Geolocation is not supported by this browser.");
}

function downloadWeatherInfo() {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    var weatherURL= "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=327d6da12d644fdfcabcfa843950f0ee";
    console.log(weatherURL);

    $.getJSON(weatherURL, displayWeatherInfo).fail(function() {
        console.log("This failed");
    });
}

function displayWeatherInfo(data) {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp); // temp
    console.log(data.wind.speed); // wind speed
    console.log(data.weather[0].description); // description
    console.log(data.weather[0].main); // icon
}
