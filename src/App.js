
import { useEffect, useState } from 'react';
import FormCity from './components/FormCity/form-city';
import weatherRequest from './components/Api/api';

import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    console.log(weather)
  }, [weather])

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

  async function prefDef(e, cityWeather) {
    e.preventDefault()

    try {
      setLoading(true)
      setError(null)

      const data = await weatherRequest(cityWeather)
      setWeather(data)

    } catch (error) {
      setError(error.message)

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">

      <FormCity prefDef={prefDef} error={error} loading={loading} />
      <div className="overlay">
        <div className="modal">

        </div>
      </div>

    </div>
  )
}

export default App
