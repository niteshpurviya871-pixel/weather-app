import { Cloudy,Search } from 'lucide-react'
import { useState } from 'react'

const Navbar = ({city,setCity}) => {
  const [showSearch, setShowSearch] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const handleSearch = () => {
    if(inputValue.trim()) {
      setCity(inputValue)
      setInputValue("")
    }
  }


  return (
    <header className='fixed flex w-full h-16 z-50 border-b backdrop-blur-[20px] border-white/20 text-white items-center bg-white/10 justify-between px-6' >

      <div className='flex items-center gap-2' >
        
        <span className='materials-symbols-outlines'><Cloudy />
        </span>

        <span>
          <h3 className='font-bold text-2xl tracking-tighter '> 
            Weathers
          </h3>
        </span>

      </div>

      <div className="flex items-center gap-4">
        {showSearch && (
          <input
            type="text"
            placeholder="Search city..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
              }}
            className="bg-white/10 border border-white/20 px-3 py-1 rounded-lg outline-none text-white"
          />
        )}

        <button 
          onClick={() => {
            if (showSearch){
              handleSearch();
            } else{
              setShowSearch(true)
            }
          }}
        className='p-2 hover:bg-white/10 rounded-lg'>
          <span className='materials-symbols-outlines text-white'><Search /></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
