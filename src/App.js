
import { useEffect, useState } from 'react';
import FormCity from './components/FormCity/form-city';
import weatherRequest from './components/Api/api';
import WeatherModal from './components/Weather-modal/weather-modal';

import './App.css';

function App() {
  const [weather, setWeather] = useState(getLocalData('weather'));
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)


  useEffect(() => {
    let timeoutID = null

    if (error !== null) {
      timeoutID = setTimeout(() => {
        setError(null)
      }, 2000)
    }

    return () => {
      clearTimeout(timeoutID)
    }
  }, [error])


  useEffect(() => {
    if (weather !== null) {
      const saveWeather = JSON.stringify(weather)
      localStorage.setItem("weather", saveWeather)
    }
  }, [weather])

  useEffect(() => {
    if (weather !== null) {
      setIsModalOpen(true)
    }
  },[weather])

  function getLocalData(key) {
    const item = localStorage.getItem(key)

    return item !== null ? JSON.parse(item) : null
  }

  async function prefDef(e, cityWeather) {
    e.preventDefault()

    try {
      setLoading(true)
      setError(null)

      const data = await weatherRequest(cityWeather)
      setWeather(data)
      setIsModalOpen(true)

    } catch (error) {
      setError(error.message)

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">

      <FormCity prefDef={prefDef} error={error} loading={loading} />
      {isModalOpen && <WeatherModal weather={weather} setIsModalOpen={setIsModalOpen} />}

    </div>
  )
}

export default App
