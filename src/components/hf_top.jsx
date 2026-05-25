import React from 'react'
import { Clock5 } from 'lucide-react'

const Hf_top = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-4 text-white/60">
        <span className='material-symbols-outlined text-sm' ><Clock5 size={12} strokeWidth={1.75} /></span>
        <span className='font-label-caps text-label-caps uppercase'>Hourly Forecast</span>
      </div>
    </>
  )
}

export default Hf_top
