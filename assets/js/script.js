const button = document.getElementById("button");
const historySection = document.getElementById("history");
var date = new Date();
var formattedDate = "(" + (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + date.getFullYear() + ")";
var historyButton = document.querySelector(".historyButton");

var APIKey = "cd5888558f293db09d47a6e3ffd05ce4";


function getApi() {
    var city = document.getElementById("search-button").value;
    // var city = "Denver";
    var tempURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIKey + "&units=imperial";
    var futureURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + APIKey + "&units=imperial&cnt=60";

    localStorage.setItem("city", city);
  
    var historyButton = document.createElement("button");
    historyButton.innerText = city;
    historyButton.setAttribute("class", "historyButton");
    historyButton.setAttribute("value", city);
    historySection.appendChild(historyButton);
 

    fetch(tempURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            
            var city = document.getElementById("City");
            var icon = document.getElementById("icon")
            var temp = document.getElementById("Temp");
            var humidity = document.getElementById("Humidity");
            var wind = document.getElementById("Wind");
            var iconCode = data.weather[0].icon;
            var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
            icon.setAttribute("src", iconUrl);


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

            var array = [8, 16, 24, 32, 36];
            for (let i = 0; i < array.length; i++) {
                const forecast = array[i];

            const unixTimestamp = data.list[forecast].dt;
            const milliseconds = unixTimestamp * 1000;
            const dateObject = new Date(milliseconds);
            const month = dateObject.toLocaleString("en-US", {month: "numeric"});
            const day = dateObject.toLocaleString("en-US", {day: "numeric"});
            const year = dateObject.toLocaleString("en-US", {year: "2-digit"});


            var futureDateClass = document.getElementById("futureDate" + i);
            var futureDateText = month + "/" + day + "/" + year;
            futureDateClass.innerHTML = futureDateText;
            
            var futureIconClass = document.getElementById("icon" + i);
            var iconCode = data.list[forecast].weather[0].icon;
            var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
            futureIconClass.setAttribute("src", iconUrl);   
           
            var futureTempClass = document.getElementById("futureTemp" + i);
            var futureTempText = "Temp: " + data.list[forecast].main.temp + "°F";
            futureTempClass.innerHTML = futureTempText;
            
            var futureHumidityClass = document.getElementById("futureHumidity" + i);
            var futureHumidityText = "Humidity: " + data.list[forecast].main.humidity + "%";
            futureHumidityClass.innerHTML = futureHumidityText;

            var futureWindClass = document.getElementById("futureWind" + i);
            var futureWindText = "Wind: " + data.list[forecast].wind.speed + " MPH";
            futureWindClass.innerHTML = futureWindText;

            }
        })

        historyButton.addEventListener("click", function() {
            historyButton.innerHTML = city;
        })
};

function getLastSearch() {
    var lastSearch = localStorage.getItem("city");
    if (lastSearch !==null) {
        document.get
    }
}


button.addEventListener("click", getApi);




