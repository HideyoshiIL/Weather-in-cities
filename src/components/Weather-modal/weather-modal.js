import { useEffect } from "react"
import "./weather-modal.css"

function WeatherModal({ weather, setIsModalOpen }) {

  function closeModal(e) {
    if (e.target.classList.contains('overlay')) {
      setIsModalOpen(false)
    } else if (e.target.classList.contains('closeCard')) {
      setIsModalOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", closeModalEscape)
    return () => {
      document.removeEventListener("keydown", closeModalEscape)
    }
  }, [])

  function closeModalEscape(e) {
    if (e.key === "Escape") {
      setIsModalOpen(false)
    }
  }


  return (
    <div className="overlay" onClick={(e) => closeModal(e)}>
      <div className="modal">
        <button className="closeCard" onClick={(e) => closeModal(e)}>X</button>
        <div className="inner">
          <h2 className="nameOfCity">В городе {weather.cityName}</h2>

          <div className="tempNow">Температура : </div>
          <div id="tempNow">{Math.ceil(weather.temp)} °C</div>

          <div className="weatherNow">На улице :</div>
          <div id="weatherNow">{weather.weather}</div>
          <img src={weather.icon} alt="weather" />
        </div>
      </div>
    </div>
  )
}

export default WeatherModal;