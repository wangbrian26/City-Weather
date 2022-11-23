var searchBtn = $("#searchBtn");
var dropDownMenu = document.querySelector(".dropdown-item");
function getCity() {
  var cityName = $("#cityInput");
  var cityNameSearch = cityName.val();
  cityNameSearch = cityNameSearch.toLowerCase();
  cityNameSearch = cityNameSearch.replace(" ", "_");
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
      var curWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1560a07c19638ebfb003c32577cdfee1&units=${typeInput}`;
      fetch(curWeatherAPI)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          $("#cityName").text(data.name);
          var cityTempCur = $("#cityTempCur");
          cityTempCur.text(data.main.temp);
          var cityWindCur = $("#cityWindCur");
          cityWindCur.text(data.wind.speed);
          var cityHumCur = $("#cityHumCur");
          cityHumCur.text(data.main.humidity);
        });
      var forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1560a07c19638ebfb003c32577cdfee1&units=imperial`;
      fetch(forecastAPI)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
    });
}

// function chooseInputType() {
//   $("#typeInput a").click(function () {
//     dropDownBtn.textContent = this.value;
//     dropDownBtn.value = this.value;
//   });
// }
searchBtn.on("click", getCity);
// dropDownMenu.addEventListener("click", chooseInputType);
