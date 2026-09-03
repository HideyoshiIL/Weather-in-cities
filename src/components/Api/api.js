
async function weatherRequest(city) {

  const apiKey = "7c224a703bcc459371091034cb662118";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Что-то пошло не так!`)
  }

  const data = await response.json();
  const text = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;


  const weatherData = {
    temp: data.main.temp,
    weather: text[0].toUpperCase() + text.slice(1),
    icon: iconUrl,
    cityName: data.name
  };


  return weatherData;
}

export default weatherRequest;