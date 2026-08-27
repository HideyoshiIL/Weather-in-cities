
import { useState } from 'react';
import FormCity from './components/FormCity/form-city';
import weatherRequest from './components/Api/api';

import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  async function prefDef(e, cityWeather) {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      const data = await weatherRequest(cityWeather)
      setWeather(data)
      console.log(weather)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
      setError(null)
    }
  }
  return (
    <div className="container">

      <FormCity prefDef={prefDef} />

      <div className="overlay">
        <div className="modal">

        </div>
      </div>

    </div>
  )
}

export default App
