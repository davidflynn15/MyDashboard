$(document).ready(function(){
  var lat;
  var long;
  var fCurrentTemp; //fahrenheit
  var fTempMin;     //fahrenheit
  var fTempMax;     //fahrenheit
  var kCurrentTemp;
  var kTempMin;
  var kTempMax;
  
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
      
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&APPID=7ed66fef841f89651d8b257c5f9852f2';
    //var api = 'https://fcc-weather-api.glitch.me/api/current?lon=' + long + '&lat=' + lat;
    //console.log(api);
  
    $.getJSON(api, function(data) {
      console.log(data);
      var desc = data.weather[0].description;
      var windSpeed = (2.237*(data.wind.speed)).toFixed(1);
      //var city = data.name;
      //var weatherIcon = data.weather[0].icon;
      kCurrentTemp = data.main.temp;                   //temp in kelvin
      kTempMin = data.main.temp_min;                   //temp in kelvin
      kTempMax = data.main.temp_max;                   //temp in kelvin
      //cTemp = (kTemp-273).toFixed(1);           //temp in celcius
      //cTemp = (data.main.temp).toFixed(1);        //temp in celcius
      fCurrentTemp = (1.8 *(kCurrentTemp - 273) + 32).toFixed(1);    //temp in fahrenheit
      fTempMin = (1.8 *(kTempMin - 273) + 32).toFixed(1);    //temp in fahrenheit
      fTempMax = (1.8 *(kTempMax - 273) + 32).toFixed(1);    //temp in fahrenheit
       
      //console.log(weatherType);
      //console.log(fTemp);
      //console.log(windSpeed);
      //console.log(city);
      //$("#city").html(city);
      //$("#icon").html('<img src=' + weatherIcon + "'>");
      $("#description").html(desc);
      $("#windSpeed").html(windSpeed + " mph");
      $("#currTemp").html(fCurrentTemp + " &#8457;");
      $("#hiLoTemp").html(fTempMin + " &#8457;" + " / " + fTempMax + " &#8457;");
      //$("#swapTempScale").html("Display in Celcius");
 
    }); //getJSON openWeather
    
  }); //.getJSON ip-api.com
}); //document ready
