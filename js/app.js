const API_Key = `f18bbc800a4b47197404bcd135640b72`;
const searchCity = () => {
  const searchText = document.getElementById('search-field').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_Key}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemp(data));
};
const displayTemp = (temperature) => {
  console.log(temperature);
};
