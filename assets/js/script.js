const button = document.getElementById("button");
const historySection = document.getElementById("history");
var date = new Date();
var formattedDate = "(" + (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + date.getFullYear() + ")";
var historyButton = document.getElementsByClassName("historyButton");

var APIKey = "cd5888558f293db09d47a6e3ffd05ce4";


function getApi() {
    // var city = document.getElementById("search-button").value;
    var city = "Denver";
    var tempURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIKey + "&units=imperial";
    var futureURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + APIKey + "&units=imperial&cnt=60";

    localStorage.setItem("city", city);
    console.log(localStorage.getItem("example"));
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
            // var futureDate = document.getElementById("futureDate");
            // var futureTemp = document.getElementById("futureTemp");
            // var futureHumidity = document.getElementById("futureHumidity");
            // var futureWind = document.getElementById("futureWind");

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
            var futureDate = document.createElement("h3");
            var futureDateText = month + "/" + day + "/" + year;
            futureDate.textContent = futureDateText;
            futureDateClass.appendChild(futureDate);
            
            var futureTempClass = document.getElementById("futureDate" + i);
            var futureTemp = document.createElement("h5");
            var futureTempText = "Temp: " + data.list[forecast].main.temp + "°F";
            futureTemp.textContent = futureTempText;
            futureTempClass.appendChild(futureTemp);
            
            var futureHumidityClass = document.getElementById("futureDate" + i);
            var futureHumidity = document.createElement("h5");
            var futureHumidityText = "Humidity: " + data.list[forecast].main.humidity + "%";
            futureHumidity.textContent = futureHumidityText;
            futureHumidityClass.appendChild(futureHumidity);

            var futureWindClass = document.getElementById("futureDate" + i);
            var futureWind = document.createElement("h5");
            var futureWindText = "Wind: " + data.list[forecast].wind.speed + " MPH";
            futureWind.textContent = futureWindText;
            futureWindClass.appendChild(futureWind); 

            }






            // futureDate.textContent = month + "/" + day + "/" + year;
            // futureTemp.textContent = "Temp: " + data.list[8].main.temp + "°F";
            // futureHumidity.textContent = "Humidity: " + data.list[8].main.humidity + "%";
            // futureWind.textContent = "Wind: " + data.list[8].wind.speed + " MPH";

            // var futureCard = document.createElement("card");

            // futureCard.innerText = city;
            // futureCard.setAttribute("id", "futureDate");
            // futureCard.setAttribute("value", city);
            // historySection.appendChild(futureCard);

        })
};

// function recallCity(e) {
//     var buttonValue = e.target.value;
//     console.log(buttonValue);
//     // var city = localStorage.getItem();
//     var city = "Denver"
//     var tempURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIKey + "&units=imperial";
//     var futureURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + APIKey + "&units=imperial&cnt=60";

//     localStorage.setItem(city, city);
//     console.log(localStorage.getItem("example"));
//     var historyButton = document.createElement("button");
//     historyButton.innerText = city;
//     historyButton.setAttribute("class", "historyButton");
//     historySection.appendChild(historyButton);
 

//     fetch(tempURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             var city = document.getElementById("City");
//             var temp = document.getElementById("Temp");
//             var humidity = document.getElementById("Humidity");
//             var wind = document.getElementById("Wind");

//             city.textContent = data.name + " " + formattedDate;
//             temp.textContent = "Current Temp: " + data.main.temp + "°F";
//             humidity.textContent = "Humidity: " + data.main.humidity + "%";
//             wind.textContent = "Wind: " + data.wind.speed + " MPH";

//         }
//         );

//     fetch(futureURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             var futureDate = document.getElementById("futureDate");
//             var futureTemp = document.getElementById("futureTemp");
//             var futureHumidity = document.getElementById("futureHumidity");
//             var futureWind = document.getElementById("futureWind");

//             const unixTimestamp = data.list[8].dt;
//             const milliseconds = unixTimestamp * 1000;
//             const dateObject = new Date(milliseconds);
//             const month = dateObject.toLocaleString("en-US", {month: "numeric"});
//             const day = dateObject.toLocaleString("en-US", {day: "numeric"});
//             const year = dateObject.toLocaleString("en-US", {year: "2-digit"});

//             futureDate.textContent = month + "/" + day + "/" + year;
//             futureTemp.textContent = "Temp: " + data.list[8].main.temp + "°F";
//             futureHumidity.textContent = "Humidity: " + data.list[8].main.humidity + "%";
//             futureWind.textContent = "Wind: " + data.list[8].wind.speed + " MPH";

//         })
    
// }

// historyButton.addEventListener("click", recallCity);

button.addEventListener("click", getApi);








