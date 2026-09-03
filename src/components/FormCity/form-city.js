import { useState } from "react";
import WeatherIcon from "./Weather-icon/weather-icon";

import "./form-city.css"



function FormCity({ prefDef, error, loading }) {
  const [cityWeather, setCityWeather] = useState("")


  return (
    <div className="inpCity">
      <form id="formCity" onSubmit={(e) => prefDef(e, cityWeather)}>
        <WeatherIcon />
        <p id="inpName"> Введите город</p>
        <input
          type="text"
          required
          placeholder="Москва"
          className="inpInp"
          value={cityWeather}
          onChange={(e) => setCityWeather(e.target.value)} />

        {error && <div className='oopsError'>{error}</div>}
        {loading && <div className='spinnerLoad'>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>}

        {error || loading ? "" : <button id="inpBut">Узнать погоду</button> }
      </form>
    </div>
  )
}

export default FormCity;