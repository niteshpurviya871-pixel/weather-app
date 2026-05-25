// navAnchor.jsx

import React from 'react'

const Anchor = ({ icon: Icon, title, active }) => {
  return (
    <a
      href="#"
      className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-xl transition-all ${
        active
          ? 'bg-white/20 text-white'
          : 'text-white/50 hover:bg-white/5'
      }`}
    >
      <Icon size={22} />

      <span className="font-inter text-[10px] font-medium uppercase tracking-widest mt-1">
        {title}
      </span>
    </a>
  )
}

export default Anchor