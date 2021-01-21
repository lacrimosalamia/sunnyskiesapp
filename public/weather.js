const api = {
  key: "6a19e904bcc229d32f3170ab79c484d2",
  baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.locationtext');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchBox.value);
  }
}

function getResults(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=imperial&APPID=${api.key}`) //getting information from the api server
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector('.weather-container .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  
  let now = new Date();;
  let date = document.querySelector('.weather-container .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.weather-container .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°f</span>`;

  let weather_el = document.querySelector('.weather-container .weather');
  weather_el.innerText = weather.weather[0].description;

  let hilow = document.querySelector('.weather-container .hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°f / ${Math.round(weather.main.temp_max)}°f`
}

function dateBuilder(d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
  
}

// export function getResults();