// WeatherCard.jsx

import React from 'react'

const WeatherCard = ({ time, icon, temp }) => {
  return (
    <div className="flex flex-col items-center min-w-[48px] font-label-caps">

      <span className="text-white/60 mb-2">
        {time}
      </span>

      <img
        src={`https:${icon}`}
        alt="weather"
        className="w-8 h-8 mb-2"
      />

      <span className="text-white">
        {temp}
      </span>

    </div>
  )
}

export default WeatherCard