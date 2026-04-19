const formCity = document.querySelector("#formCity"),
      inpInp = document.querySelector(".inpInp");

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

