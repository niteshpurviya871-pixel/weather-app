import { Cloudy,Search } from 'lucide-react'
const Navbar = () => {
  return (
    <header className='fixed flex w-full h-16 z-50 border-b backdrop-blur-[20px] border-white/20 text-white items-center bg-white/10 justify-between px-6' >
      <div className='flex items-center gap-2' >
        <span className='materials-symbols-outlines'><Cloudy /></span>
        <span><h3 className='font-bold text-2xl tracking-tighter '> Weathers</h3></span>
      </div>
      <div className="flex items-center gap-4">
        <button className='p-2 hover:bg-white/10 '>
          <span className='materials-symbols-outlines text-white'><Search /></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
