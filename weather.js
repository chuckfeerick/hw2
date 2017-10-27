
// let updateWeather =



let get_forecast = document.getElementById("get_forecast");
get_forecast.addEventListener("click", function(event) {
  event.preventDefault()
  navigator.geolocation.getCurrentPosition(getWeather)
  // getWeather(updateWeather)
})

// Show user location in the console on click

let link = document.getElementById("get_forecast")
link.addEventListener("click", function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(userData);
});

// Show user's location to the console
let userData = function(info) {
  console.log("User Current Latitude:", info.coords.latitude);
  console.log("User Current Longitude:", info.coords.longitude);
  let url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.8&lon=-87.6&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'

  }

let getWeather = function() {
  let latitude = '41.8781';
  let longitude = '-87.6298';
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'

  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
}
  let convertToJSON = function(response) {
    return response.json();

}

let updateWeather = function(dataFromService){
  console.info(dataFromService)
  currentlocationID = dataFromService.name;
  currentlocation = document.querySelector('#weather h4')
  currentlocation.innerHTML = currentlocationID
  currentweatheroutside = dataFromService.weather[0].description
  currentTemperatureID = dataFromService.main.temp;
  currentTemperature =  document.querySelector('#weather p')
  currentTemperature.innerHTML = "It is " + currentTemperatureID + " degrees outside with " + currentweatheroutside;
  currentWeatherImgUrlID = "http://openweathermap.org/img/w/" + dataFromService.weather[0].icon + ".png";
  currentWeatherImgUrl = document.querySelector('#weather img');
  currentWeatherImgUrl.src = currentWeatherImgUrlID;
}




let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}

// HINT:
// Weather icon example: http://openweathermap.org/img/w/10d.png
// The very last part ('10d.png') can change based on the current conditions.
