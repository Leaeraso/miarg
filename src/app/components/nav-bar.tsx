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
import info from '../../../info.json'

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
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const pathName = usePathname()
  const router = useRouter()

  const toggleUserMenu = () => setIsUserMenuOpen((prev) => !prev)
  // const closeUserMenu = () => setIsUserMenuOpen(false)

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
        <div className="relative">
          <button onClick={toggleUserMenu} className="flex items-center gap-1">
            <CircleUserRound className="stroke-[2.5]" />
            <ChevronDown className="w-4 h-4" />
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-0 mt-3 w-72 bg-white rounded-lg shadow-lg z-50">
              <div className="p-4 border-b">
                <p className="my-2 text-xl font-semibold text-[#333333]">
                  {info.name} {info.surname}
                </p>
                <p className="text-sm text-gray-600">{info.cuil}</p>
                <div className="flex items-center text-sm text-blue-600 mt-1">
                  <span>Validado Nivel 3</span>
                  <svg
                    className="ml-1 w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L9 13.414l4.707-4.707z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full h-px bg-gray-300 my-4"></div>
              <ul className="text-[#333333] text-md font-light text-left">
                <li>
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                    Mi perfil
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                    Hijos/as asociados
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                    Configurar mi cuenta
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                    Seguridad
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                    Términos y Condiciones
                  </button>
                </li>
                <li>
                  <div className="w-full h-px bg-gray-300 my-4"></div>

                  <button className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-600 font-semibold">
                    Cerrar la sesión
                  </button>
                </li>
              </ul>
            </div>
          )}
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
