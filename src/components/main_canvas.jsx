import TopMainContent from './upper_content.jsx'
import Dynamic_content from './dynamic_content.jsx'
const MidPart = () => {
  return (
    <div>
      <main className='weather min-h-screen pt-24 pb-32 px-6 flex flex-col items-center'>
      <TopMainContent />
      <Dynamic_content />
      </main>
    </div>
  )
}

export default MidPart
