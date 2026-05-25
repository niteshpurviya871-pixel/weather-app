// BottomNav.jsx

import React from 'react'
import {
  Sun,
  CalendarDays,
  Map,
  MapPin,
} from 'lucide-react'

import Anchor from './navAnchor'

const navItems = [
  {
    id: 1,
    icon: Sun,
    title: 'Dashboard',
    active: true,
  },
  {
    id: 2,
    icon: CalendarDays,
    title: 'Forecast',
    active: false,
  },
  {
    id: 3,
    icon: Map,
    title: 'Maps',
    active: false,
  },
  {
    id: 4,
    icon: MapPin,
    title: 'Saved',
    active: false,
  },
]

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-20 bg-white/10 backdrop-blur-[30px] border-t border-white/20 rounded-t-2xl">
      {navItems.map((item) => (
        <Anchor
          key={item.id}
          icon={item.icon}
          title={item.title}
          active={item.active}
        />
      ))}
    </nav>
  )
}

export default BottomNav