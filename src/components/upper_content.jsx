const TopMainContent = () => {
  return (
    <div>
        <section className='w-full max-w-4xl flex flex-col items-center text-center mb-12'>
            <h1 className='text-headline-md text-white/80 mb-2 font-label-caps'>San Francisco,CA</h1>
            <div className='flex flex-col items-center'>
                <span className=' text-display-temp text-white font-label-caps '>72°</span>
                <p className="font-headline-md text-headline-md text-white font-label-caps">Sunny</p>
                <div className="mt-2 px-4 py-1 glass-card rounded-full">
                    <p className='font-label-caps text-label-caps text-white/90'>Feels like 75</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default TopMainContent
