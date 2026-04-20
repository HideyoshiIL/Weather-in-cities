const formCity = document.querySelector("#formCity"),
      inpInp = document.querySelector(".inpInp"),
      iconWeather = document.querySelector("#iconWeather");

formCity.addEventListener("submit", async (event) => {
  event.preventDefault();
  let res = inpInp.value;
  const apiKey = "7c224a703bcc459371091034cb662118";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${res}&appid=${apiKey}&units=metric`;

  
 const data = await weatherRequest(url);

 console.log(data)
})

async function weatherRequest(url) {
  const weatherApi = await fetch(url);
  const data = await weatherApi.json();
  
  const res = {};
  res.temp = data.main.temp;
  res.weather = data.weather[0].description;
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




