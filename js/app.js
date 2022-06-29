const API_Key = `f18bbc800a4b47197404bcd135640b72`;
const searchCity = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = '';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_Key}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemp(data));
};
const innerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTemp = (temperature) => {
  innerText('city-name', temperature.name);
  innerText('temp', temperature.main.temp);
  innerText('feels-like', temperature.main.feels_like);
  innerText('conditon', temperature.weather[0].main);
  // set weather icon
  const iconURL = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById('weather-icon');
  imgIcon.setAttribute('src', iconURL);
};
