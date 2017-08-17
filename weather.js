function weather() {
  var lat;
  var long;
  var api;
  var city;
  var desc;
  var iconCode;
  var windSpeed;
  var fCurrentTemp; //temp in fahrenheit
  var fTempMin;     //temp in fahrenheit
  var fTempMax;     //temp in fahrenheit
    
  //get your location
  //$.getJSON("http://ip-api.com/json", function(data2) {
  //  lat = data2.lat;
  //  long = data2.lon;
    //console.log(lat);
    //console.log(long);
  //if (navigator.geolocation) {  
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
      
    api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=imperial' + '&APPID=7ed66fef841f89651d8b257c5f9852f2';
    //var api = 'https://fcc-weather-api.glitch.me/api/current?lon=' + long + '&lat=' + lat;
    //console.log(api);
  
    $.getJSON(api, function(data) {
      //console.log(data);
      desc = data.weather[0].description;
      windSpeed = data.wind.speed.toFixed(1);
      city = data.name;
      iconCode = data.weather[0].icon;
      var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
      fCurrentTemp = data.main.temp;
      fTempMin = data.main.temp_min;
      fTempMax = data.main.temp_max;
       
      //console.log(weatherType);
      //console.log(fTemp);
      //console.log(windSpeed);
      //console.log(city);
      $("#title").html("Weather for " + city);
      $("#icon").html("<img src='" + iconUrl + "'>");
      $("#currTemp").html(fCurrentTemp + " &#8457;");
      $("#hiLoTemp").html(fTempMax + " &#8457;" + " / " + fTempMin + " &#8457;");
      $("#description").html(desc);
      $("#windSpeed").html(windSpeed + " mph");
    }); //getJSON openWeather
    
  }); //.getJSON ip-api.com
}  //weather function