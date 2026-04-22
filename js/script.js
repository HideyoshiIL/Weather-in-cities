const formCity = document.querySelector("#formCity"),
      inpInp = document.querySelector(".inpInp"),
      iconWeather = document.querySelector("#iconWeather"),
      container = document.querySelector(".container");

formCity.addEventListener("submit", async (event) => {
  event.preventDefault();
  let res = inpInp.value;
  const apiKey = "7c224a703bcc459371091034cb662118";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${res}&appid=${apiKey}&units=metric&lang=ru`;

  
 const data = await weatherRequest(url);

 cardOfWeather(data, res);

 event.target.reset();
})

async function weatherRequest(url) {
  const weatherApi = await fetch(url);
  const data = await weatherApi.json();

  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  const res = {};
  res.temp = data.main.temp;
  const text = data.weather[0].description;
  res.weather = text[0].toUpperCase() + text.slice(1);
  res.icon = iconUrl;
  return res;
}


const weatherIcon = [
  "fa-sun-o",
  "fa-cloud" ,
  "fa-bolt",
  "fa-snowflake-o",
  "fa-soundcloud"
];
let index = 0;

const weatherInterval = setInterval(() => {
  iconWeather.classList.remove(weatherIcon[index]);
  index = (index + 1) % weatherIcon.length;
  iconWeather.classList.add(weatherIcon[index])
}, 2000);


 function cardOfWeather (obj, nameOfCity) {
  const div = document.createElement("div");
  div.classList.add("card")

  div.innerHTML = `
    <button class="closeCard">X</button>
    <div class="inner">
      <h2 class="nameOfCity">В городе ${nameOfCity}</h2>

      <div class="tempNow">Температура : </div>
      <div id="tempNow">${Math.ceil(obj.temp)} °C</div>

      <div class="weatherNow">На улице :</div>
      <div id="weatherNow">${obj.weather}</div>
      <img src="${obj.icon}" alt="weather">
    </div>
  `
  container.append(div)
}

