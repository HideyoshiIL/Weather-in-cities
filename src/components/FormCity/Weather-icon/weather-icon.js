import { useState } from "react";
import { useEffect } from "react";

import "./weather-icon.css"
import "../../../css/font-awesome.min.css"

function WeatherIcon() {
  const [index, setIndex] = useState(0)
  const weatherIcon = [
    "fa fa-sun-o",
    "fa fa-cloud",
    "fa fa-bolt",
    "fa fa-snowflake-o",
    "fa fa-soundcloud"
  ];


  useEffect(() => {
    const intervalID = setInterval(() => {

      setIndex((prevIndex) =>
        ((prevIndex + 1) % weatherIcon.length)
      )

    }, 2000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  return (
    <i id="iconWeather" className={weatherIcon[index]}></i>
  )
}

export default WeatherIcon