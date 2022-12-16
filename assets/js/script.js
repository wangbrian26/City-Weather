var searchBtn = $("#searchBtn");
var dropDownMenu = document.querySelector(".dropdown-item");


//gets Geo API based on city search, then takes the coordinates to find the weather information
function getCity() {
  var cityName = document.querySelector("#cityInput")
  var cityNameSearch = cityName.val();
  cityNameSearch = cityNameSearch.toLowerCase();
  cityNameSearch = cityNameSearch.replace(" ", "_");
  document.querySelector("#searchHistory").appendChild = `<button class="prevSearchButton" id="${cityName}">${cityName}</button>`
}

function findCityInfo(cityNameSearch) {
  var geoAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${cityNameSearch}&appid=1560a07c19638ebfb003c32577cdfee1`;
  var dropDownBtn = document.querySelector("#dropdownMenuButton");
  fetch(geoAPI)
    .then(function (response) {
      if (response.status != 200) {
        searchBtn.append("<p>Please input a valid city.</p>");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var lat = data[0].lat;
      var lon = data[0].lon;

      var typeInput = $("#typeInput").val();
      var curWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1560a07c19638ebfb003c32577cdfee1&units=imperial`;
      fetch(curWeatherAPI)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          document.querySelector("#cityName").textContent = `${data.name}`;
          var cityTempCur = $("#cityTempCur");
          cityTempCur.text(data.main.temp + " \u00B0F");
          var cityWindCur = $("#cityWindCur");
          cityWindCur.text(data.wind.speed + " mph");
          var cityHumCur = $("#cityHumCur");
          cityHumCur.text(data.main.humidity + " %");
        });
      var forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1560a07c19638ebfb003c32577cdfee1&units=imperial`;
      fetch(forecastAPI)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var curDate = data.list[5].dt_txt;
          curDate = curDate.split(" ");
          curDate = curDate[0];
          curDate = curDate.split("-")
          curDate = curDate[1] + "/" + (curDate[2].parseInt()-1).toString() + "/" + curDate[0]
          console.log(typeof(curDate[2]))
          console.log(curDate);
          document.querySelector("#cityDate").textContent = `${curDate}`;
          var day1Date = data.list[5].dt_txt;
          day1Date = day1Date.split(" ");
          day1Date = day1Date[0];
          day1Date = day1Date.split("-")
          day1Date = day1Date[1] + "/" + day1Date[2] + "/" + day1Date[0]
          document.querySelector("#day1").textContent = `${day1Date}`;
          var day1Temp = data.list[5].main.temp;
          document.querySelector(
            "#cityTemp1"
          ).textContent = `${day1Temp} \u00b0F`;
          var day1Wind = data.list[5].wind.speed;
          document.querySelector("#cityWind1").textContent = `${day1Wind} mph`;
          var day1Hum = data.list[5].main.humidity;
          document.querySelector("#cityHumidity1").textContent = `${day1Hum} %`;
          var day2Date = data.list[13].dt_txt;
          day2Date = day2Date.split(" ");
          day2Date = day2Date[0];
          day2Date = day2Date.split("-")
          day2Date = day2Date[1] + "/" + day2Date[2] + "/" + day2Date[0]
          document.querySelector("#day2").textContent = `${day2Date}`;
          var day2Temp = data.list[13].main.temp;
          document.querySelector(
            "#cityTemp2"
          ).textContent = `${day2Temp} \u00b0F`;
          var day2Wind = data.list[13].wind.speed;
          document.querySelector("#cityWind2").textContent = `${day2Wind} mph`;
          var day2Hum = data.list[13].main.humidity;
          document.querySelector("#cityHumidity2").textContent = `${day2Hum} %`;
          var day3Date = data.list[21].dt_txt;
          day3Date = day3Date.split(" ");
          day3Date = day3Date[0];
          day3Date = day3Date.split("-")
          day3Date = day3Date[1] + "/" + day3Date[2] + "/" + day3Date[0]
          document.querySelector("#day3").textContent = `${day3Date}`;
          var day3Temp = data.list[21].main.temp;
          document.querySelector(
            "#cityTemp3"
          ).textContent = `${day3Temp} \u00b0F`;
          var day3Wind = data.list[21].wind.speed;
          document.querySelector("#cityWind3").textContent = `${day3Wind} mph`;
          var day3Hum = data.list[21].main.humidity;
          document.querySelector("#cityHumidity3").textContent = `${day3Hum} %`;
          var day4Date = data.list[29].dt_txt;
          day4Date = day4Date.split(" ");
          day4Date = day4Date[0];
          day4Date = day4Date.split("-")
          day4Date = day4Date[1] + "/" + day4Date[2] + "/" + day4Date[0]
          document.querySelector("#day4").textContent = `${day4Date}`;
          var day4Temp = data.list[29].main.temp;
          document.querySelector(
            "#cityTemp4"
          ).textContent = `${day4Temp} \u00b0F`;
          var day4Wind = data.list[29].wind.speed;
          document.querySelector("#cityWind4").textContent = `${day4Wind} mph`;
          var day4Hum = data.list[29].main.humidity;
          document.querySelector("#cityHumidity4").textContent = `${day4Hum} %`;
          var day5Date = data.list[37].dt_txt;
          day5Date = day5Date.split(" ");
          day5Date = day5Date[0];
          day5Date = day5Date.split("-")
          day5Date = day5Date[1] + "/" + day5Date[2] + "/" + day5Date[0]
          document.querySelector("#day5").textContent = `${day5Date}`;
          var day5Temp = data.list[37].main.temp;
          document.querySelector(
            "#cityTemp5"
          ).textContent = `${day5Temp} \u00b0F`;
          var day5Wind = data.list[37].wind.speed;
          document.querySelector("#cityWind5").textContent = `${day5Wind} mph`;
          var day5Hum = data.list[37].main.humidity;
          document.querySelector("#cityHumidity5").textContent = `${day5Hum} %`;
        });
    });
}

function prevSearch() {
  var prevCityName = event.target.id
  findCityInfo(prevCityName)
}
// function chooseInputType() {
//   $("#typeInput a").click(function () {
//     dropDownBtn.textContent = this.value;
//     dropDownBtn.value = this.value;
//   });
// }
searchBtn.on("click", getCity);
document.querySelector(".prevSearchButton").addEventListener("click", prevSearch)
// dropDownMenu.addEventListener("click", chooseInputType);
