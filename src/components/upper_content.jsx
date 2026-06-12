const TopMainContent = ({weatherData}) => {
    if(!weatherData){
        return <p className="text-white">Loading...</p>
    }

  return (
    <div>
        <section className='w-full max-w-4xl flex flex-col items-center text-center mb-12'>
            
            <h1 className='text-headline-md text-white/80 mb-2 font-label-caps'>{weatherData.location.name}</h1>
           
            <p className="text-white/70 mb-2">
                {new Date(weatherData.location.localtime).toLocaleDateString(
                "en-US",
                { weekday: "long" }
                )}
            </p>

            <div className='flex flex-col items-center'>
                <span className=' text-display-temp text-white font-label-caps '>{weatherData.current.temp_c}°</span>

                <p className="font-headline-md text-headline-md text-white font-label-caps">{weatherData.current.condition.text}</p>

                <div className="mt-2 px-4 py-1 glass-card rounded-full">
                    <p className='font-label-caps text-label-caps text-white/90'>Feels like {weatherData.current.feelslike_c}°</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default TopMainContent
