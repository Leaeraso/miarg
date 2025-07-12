'use client'

import { useRouter } from 'next/navigation'

export function Actions() {
  const options = [
    {
      id: 1,
      title: 'Documentos',
      icon: '/icono-documentos.svg',
      link: '/documents',
    },
    {
      id: 2,
      title: 'Vehículos',
      icon: '/icono-vehiculos.svg',
      link: '/vehicles',
    },
    {
      id: 3,
      title: 'Trabajo',
      icon: '/icono-trabajo.svg',
      link: '/work',
    },
    {
      id: 4,
      title: 'Salud',
      icon: '/icono-salud.svg',
      link: '/health',
    },
    {
      id: 5,
      title: 'Cobros',
      icon: '/icono-cobros.svg',
      link: '/payments',
    },
    {
      id: 6,
      title: 'Trámites',
      icon: '/icono-tramites.svg',
      link: '/processes',
    },
    {
      id: 7,
      title: 'Turnos',
      icon: '/turno_empty.svg',
      link: '/shifts',
    },
    {
      id: 8,
      title: 'Hijos',
      icon: '/icono-hijos.svg',
      link: '/children',
    },
  ]
  const router = useRouter()

  return (
    <>
      <section className="mb-8">
        <h3 className="text-xl font-bold text-[#333333] mt-10 ml-4">
          ¿Qué necesitás hoy?
        </h3>
        <div>
          <ul className="grid grid-cols-3 grid-rows-3 gap-4 mt-6 mx-4">
            {options.map((option) => (
              <li
                key={option.id}
                className="flex flex-col items-center justify-center bg-white rounded-lg shadow py-6"
              >
                <button
                  className="flex flex-col items-center justify-center"
                  onClick={() => router.push(option.link)}
                >
                  <img
                    src={option.icon}
                    alt={option.title}
                    className="w-10 h-10 mb-4 stroke-2"
                  />
                  <p className="text-[#333333] text-sm font-medium">
                    {option.title}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
