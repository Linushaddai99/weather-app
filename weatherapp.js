var button = document.querySelector('.search-icon')
var inputVal = document.querySelector('.search-bar');
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.description');
var speed = document.querySelector('.speed')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputVal.value+'&units=metric&appid=1a0d023460174c036d2cb02cfc9c918b')
.then(response => response.json())
.then(data =>  {
    var cityValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var speedValue = data['wind']['speed'];

    city.innerHTML = cityValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
    speed.innerHTML = speedValue;
})
.catch(err => alert("Wrong city name"));
})
/* */ 


