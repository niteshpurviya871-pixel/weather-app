import React from 'react'
import Hf_top from './hf_top'
import WeatherCard from './weatherCard'
import {Sun, Cloud, CloudSun, Sunset } from 'lucide-react'

const weatherData = [
  {
    time: 'Now',
    icon: Sun,
    temp: '72°',
  },
  {
    time: '1PM',
    icon: Sun,
    temp: '74°',
  },
  {
    time: '2PM',
    icon: CloudSun,
    temp: '75°',
  },
   {
    time: '3PM',
    icon: Sun,
    temp: '74°',
  },
  {
    time: '4PM',
    icon: Cloud,
    temp: '71°',
  },
   {
    time: '5PM',
    icon: Cloud,
    temp: '71°',
  },
  {
    time: '6PM',
    icon: Sunset,
    temp: '65°',
  },
]

const HourlyForecast = () => {
  return (
    <div className="col-span-2 md:col-span-4 glass-card rounded-xl p-6">
      <Hf_top />
      <div className="flex gap-8 overflow-x-auto no-scrollbar pb-2">
        {weatherData.map((item, index) => (
          <WeatherCard
            key={index}
            time={item.time}
            icon={item.icon}
            temp={item.temp}
          />
        ))}
      </div>
    </div>
  )
}

export default HourlyForecast
