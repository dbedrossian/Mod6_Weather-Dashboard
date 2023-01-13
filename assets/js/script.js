const button = document.getElementById("button");

var date = new Date();
var formattedDate = "(" + (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + date.getFullYear() + ")";

function getApi() {
    // var city = document.getElementById("search-button").value;
    var city = "Denver";
    var APIKey = "cd5888558f293db09d47a6e3ffd05ce4";
    var tempURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIKey + "&units=imperial";
    var futureURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + APIKey + "&units=imperial&cnt=60";

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

            city.textContent = data.name + " " + formattedDate;
            temp.textContent = "Current Temp: " + data.main.temp + "°F";
            humidity.textContent = "Humidity: " + data.main.humidity + "%";
            wind.textContent = "Wind: " + data.wind.speed + " MPH";

        }
        );

    fetch(futureURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var futureDate = document.getElementById("futureDate");
            var futureTemp = document.getElementById("futureTemp");
            var futureHumidity = document.getElementById("futureHumidity");
            var futureWind = document.getElementById("futureWind");

            const unixTimestamp = data.list[8].dt;
            const milliseconds = unixTimestamp * 1000;
            const dateObject = new Date(milliseconds);
            const month = dateObject.toLocaleString("en-US", {month: "numeric"});
            const day = dateObject.toLocaleString("en-US", {day: "numeric"});
            const year = dateObject.toLocaleString("en-US", {year: "2-digit"});

            futureDate.textContent = month + "/" + day + "/" + year;
            futureTemp.textContent = "Temp: " + data.list[8].main.temp + "°F";
            futureHumidity.textContent = "Humidity: " + data.list[8].main.humidity + "%";
            futureWind.textContent = "Wind: " + data.list[8].wind.speed + " MPH";

        })
};

button.addEventListener("click", getApi);

