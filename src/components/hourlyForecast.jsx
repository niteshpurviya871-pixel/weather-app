import React from 'react'
import Hf_top from './hf_top'
import WeatherCard from './weatherCard'

const HourlyForecast = ({weatherData}) => {
if(!weatherData) return null;

const hourlyData = weatherData?.forecast?.forecastday?.[0]?.hour || [];

  return (
    <div className="col-span-2 md:col-span-4 glass-card rounded-xl p-6">
      <Hf_top />

      <div className="flex gap-8 overflow-x-auto no-scrollbar pb-2">
        {hourlyData.map((item, index) => (
          <WeatherCard
            key={index}
            time={item.time.split(" ")[1]}
            icon={item.condition.icon}
            temp={`${item.temp_c}°`}
          />
        ))}
      </div>
    </div>
  )
}

export default HourlyForecast
