/* eslint-disable @next/next/no-img-element */
'use client'
import {
  AlignJustify,
  ChevronDown,
  CircleUserRound,
  PhoneIcon,
} from 'lucide-react'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { DocumentsIcon } from '@/app/components/icons/documents'
import { ChargesIcon } from '@/app/components/icons/charges'
import { HomeIcon } from '@/app/components/icons/home'
import { VehicleIcon } from '@/app/components/icons/vehicle'
import { WorkIcon } from '@/app/components/icons/work'
import { HealthIcon } from '@/app/components/icons/health'
import { ProcessIcon } from '@/app/components/icons/process'
import { ShiftIcon } from '@/app/components/icons/shift'
import { ChildrenIcon } from '@/app/components/icons/children'
import { NewsIcon } from '@/app/components/icons/news'
import { TinaIcon } from '@/app/components/icons/tina'

const menuItems = [
  {
    id: 1,
    title: 'Inicio',
    icon: HomeIcon,
    link: '/',
  },
  {
    id: 2,
    title: 'Documentos',
    icon: DocumentsIcon,
    link: '/documents',
  },
  {
    id: 3,
    title: 'Vehiculos',
    icon: VehicleIcon,
    link: '/vehicles',
  },
  {
    id: 4,
    title: 'Trabajo',
    icon: WorkIcon,
    link: '/work',
  },
  {
    id: 5,
    title: 'Salud',
    icon: HealthIcon,
    link: '/health',
  },
  {
    id: 6,
    title: 'Cobros',
    icon: ChargesIcon,
    link: '/payments',
  },
  {
    id: 7,
    title: 'Tramites',
    icon: ProcessIcon,
    link: '/processes',
  },
  {
    id: 8,
    title: 'Turnos',
    icon: ShiftIcon,
    link: '/shifts',
  },
  {
    id: 9,
    title: 'Hijos',
    icon: ChildrenIcon,
    link: '/children',
  },
  {
    id: 10,
    title: 'Novedades',
    icon: NewsIcon,
    link: '/news',
  },
  {
    id: 11,
    title: 'Telefonos',
    icon: PhoneIcon,
    link: '/phones',
  },
  {
    id: 12,
    title: 'Tina',
    icon: TinaIcon,
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
              const Icon = item.icon

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
                  <Icon
                    className={`w-6 h-6 ${
                      isActive ? 'stroke-white' : 'stroke-[#362fc1]'
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
