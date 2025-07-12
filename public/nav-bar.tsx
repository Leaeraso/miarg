/* eslint-disable @next/next/no-img-element */
'use client'
import { AlignJustify, ChevronDown, CircleUserRound } from 'lucide-react'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const menuItems = [
  {
    id: 1,
    title: 'Inicio',
    icon: '/icono-home.svg',
    link: '/',
  },
  {
    id: 2,
    title: 'Documentos',
    icon: '/icono-documentos.svg',
    link: '/documents',
  },
  {
    id: 3,
    title: 'Vehiculos',
    icon: '/icono-vehiculos.svg',
    link: '/vehicles',
  },
  {
    id: 4,
    title: 'Trabajo',
    icon: '/icono-trabajo.svg',
    link: '/work',
  },
  {
    id: 5,
    title: 'Salud',
    icon: '/icono-salud.svg',
    link: '/health',
  },
  {
    id: 6,
    title: 'Cobros',
    icon: '/icono-cobros.svg',
    link: '/payments',
  },
  {
    id: 7,
    title: 'Tramites',
    icon: '/icono-tramites.svg',
    link: '/processes',
  },
  {
    id: 8,
    title: 'Turnos',
    icon: '/turno_empty.svg',
    link: '/shifts',
  },
  {
    id: 9,
    title: 'Hijos',
    icon: '/icono-hijos.svg',
    link: '/children',
  },
  {
    id: 10,
    title: 'Novedades',
    icon: '/icono-novedades.svg',
    link: '/news',
  },
  {
    id: 11,
    title: 'Telefonos',
    icon: '/icono-emergencias.svg',
    link: '/phones',
  },
  {
    id: 12,
    title: 'Tina',
    icon: '/icono-tina.svg',
    link: '/tina',
  },
]

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathName = usePathname()
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="flex justify-between items-center bg-[#362fc1] rounded-b-lg px-4 py-8">
        <button onClick={toggleMenu}>
          <AlignJustify className="stroke-[2.5]" />
        </button>
        <div className="flex-1 flex justify-start pl-2">
          <img src="/miargentina-logo.svg" alt="icono-tina" />
        </div>
        <div className="flex items-center gap-1">
          <CircleUserRound className="stroke-[2.5]" />
          <ChevronDown className="w-4 h-4" />
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 z-40 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-lg">
          <div className="p-4 py-8">
            {menuItems.map((item) => {
              const isActive = pathName === item.link

              return (
                <button
                  key={item.id}
                  className={`w-full text-left py-3 px-4 rounded-full transition-colors flex items-center gap-x-4
                 ${
                   isActive
                     ? 'bg-[#362fc1] text-white'
                     : 'bg-white text-[#333333]'
                 }`}
                  onClick={() => router.push(item.link)}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={`w-6 h-6 ${
                      isActive ? 'color-[#362fc1]' : 'color-white'
                    }`}
                  />
                  <span
                    className={`font-bold ${
                      isActive ? 'text-white' : 'text-[#333333]'
                    } `}
                  >
                    {item.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
