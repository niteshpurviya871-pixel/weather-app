// WeatherCard.jsx

import React from 'react'

const WeatherCard = ({ time, icon: Icon, temp }) => {
  return (
    <div className="flex flex-col items-center min-w-[48px] font-label-caps">

      <span className="text-white/60 mb-2">
        {time}
      </span>

      <Icon
        size={24}
        strokeWidth={1.75}
        className="text-white mb-2"
      />

      <span className="text-white">
        {temp}
      </span>

    </div>
  )
}

export default WeatherCard