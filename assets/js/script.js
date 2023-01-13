const button = document.getElementById("button");



function getApi() {
    var city = document.getElementById("search-button").value;
    var APIKey = "cd5888558f293db09d47a6e3ffd05ce4";
    var tempURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIKey + "&units=imperial";

  fetch(tempURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var city = document.getElementById("City");
        var temp = document.getElementById("Temp");
        var humidity = document.getElementById("Humidity");
        var wind = document.getElementById("Wind");

        city.textContent = data.name;
        temp.textContent = "Current Temp: " + data.main.temp + "°F";
        humidity.textContent = "Humidity: " + data.main.humidity + "%";
        wind.textContent = "Wind: " + data.wind.speed + " MPH";

      }
    );
};

button.addEventListener("click", getApi);

