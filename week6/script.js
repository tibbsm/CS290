/**
* @title    script.js
*
* @desc     This file sends a GET request to Open Weather Map and returns 
*			city weather reports. Also, sends a post request and return 
*  			whatever message is entered. 
*
* @author   Marc Tibbs (933270515)
* @email    tibbsm@oregonstate.edu
* @class    CS290 - 400 - Winter 2018
*/

    var appid = 'a897d3200660107329cdb14c15047a13';

    document.getElementById('urlSubmit').addEventListener('click', function(event){

    var req = new XMLHttpRequest();
    
    var location = document.getElementById('locationIn').value;

    req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + appid + '&units=metric', true);
    
    req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){

        var response = JSON.parse(req.responseText);
        document.getElementById('cityName').textContent = "Weather in " + response.name + ', ' + response.sys.country;
        document.getElementById('temp').textContent = "Temperature: " + response.main.temp + " Celsius";
        document.getElementById('wind').textContent = "Wind Speed: " + response.wind.speed + " m/s";
        document.getElementById('hum').textContent = "Humidity: " + response.main.humidity +'%';    
        console.log(JSON.parse(req.responseText));

      } else {
        
        console.log("Error in network request: " + req.statusText);
      }});

    req.send(null);
    event.preventDefault();
  });



    document.getElementById('urlSubmitZip').addEventListener('click', function(event){

    var req = new XMLHttpRequest();
    
    var location = document.getElementById('locationIn').value;

    req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=' + location + '&appid=' + appid + '&units=metric', true);
    
    req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){

        var response = JSON.parse(req.responseText);
        document.getElementById('cityName').textContent = "Weather in " + response.name + ', ' + response.sys.country;
        document.getElementById('temp').textContent = "Temperature: " + response.main.temp + " Celsius";
        document.getElementById('wind').textContent = "Wind Speed: " + response.wind.speed + " m/s";
        document.getElementById('hum').textContent = "Humidity: " + response.main.humidity +'%';    
        console.log(JSON.parse(req.responseText));

      } else {
        
        console.log("Error in network request: " + req.statusText);
      }});

    req.send(null);
    event.preventDefault();
  });



    document.getElementById('pSubmit').addEventListener('click', function(event){

    var req = new XMLHttpRequest();
    
    var payload = document.getElementById('postInfo').value;

    req.open('POST', 'http://httpbin.org/post', true);

    req.setRequestHeader('Content-Type', 'application/json');
    
    req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){

        var response = JSON.parse(req.responseText);
        document.getElementById('postOut').textContent = "Output from POST: " + response.data;             
        console.log(JSON.parse(req.responseText));

      } else {
        
        console.log("Error in network request: " + req.statusText);
      }});

    req.send(JSON.stringify(payload));
    event.preventDefault();
  });
