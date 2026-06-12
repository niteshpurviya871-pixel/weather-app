import React from 'react'
import HourlyForecast from './hourlyForecast'
import WeatherHighlight from './weatherHighlight'
const Dynamic_content = ({weatherData}) => {
  return (
    <section className='w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4'>
        <HourlyForecast weatherData={weatherData}/>
        <WeatherHighlight weatherData={weatherData}/>
    </section>
  )
}

export default Dynamic_content
