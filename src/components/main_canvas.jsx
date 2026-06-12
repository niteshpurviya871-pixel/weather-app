import TopMainContent from './upper_content.jsx'
import Dynamic_content from './dynamic_content.jsx'
const MidPart = ({weatherData}) => {
  return (
    <div>
      <main className='weather min-h-screen pt-24 pb-32 px-6 flex flex-col items-center'>
      <TopMainContent weatherData={weatherData}/>
      <Dynamic_content weatherData={weatherData}/>
      </main>
    </div>
  )
}

export default MidPart
