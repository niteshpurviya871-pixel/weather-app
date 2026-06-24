import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/navbar.jsx'
import MidPart from './components/main_canvas.jsx'
import BottomNav from './components/bottom_nav.jsx'

import './App.css'
const App = () => {
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


const [weatherData, setWeatherData] = useState(null)
const [city, setCity] = useState("Jaipur")

useEffect(() => {
  const fetchWeather = async () => {
    try{
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1`
      );

      setWeatherData(res.data);
    }catch(error){
      console.log(error);
      console.log(error.response?.data);
      
    }
  };

  fetchWeather();
},[city]);   // city change hote hi API call

  return (
    <div>
      <Navbar city={city} setCity={setCity}/>
      <MidPart weatherData={weatherData}/>
      <BottomNav />
    </div>
  )
}

export default App
