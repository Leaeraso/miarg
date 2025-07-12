'use client'
/* eslint-disable @next/next/no-img-element */
import { ChevronDown, CircleAlert } from 'lucide-react'
import { useState } from 'react'
import { NavBar } from '../../../public/nav-bar'
import { useRouter } from 'next/navigation'

export default function Documents() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const router = useRouter()

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <>
      <main className="min-h-screen bg-[#f0f0f0]">
        <NavBar />

        <section className="flex flex-col px-4">
          {/* DNI */}
          <div className="bg-white border border-gray-200 rounded-lg mt-6 max-w-md mx-4 shadow-lg overflow-hidden transition-all">
            <button
              onClick={() => toggleSection('dni')}
              className="w-full p-4 flex flex-row gap-x-2 items-center"
            >
              <div className="border-r border-gray-300 pr-4 flex items-center justify-center">
                <img
                  src="/icono-documentos.svg"
                  alt="DNI"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-lg font-bold text-[#333333] ml-2 flex-1 text-left">
                Documento Nacional de Identidad (DNI)
              </h4>
              <ChevronDown
                className={`text-gray-500 transition-transform ${
                  openSection === 'dni' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Contenido desplegable DNI */}
            {openSection === 'dni' && (
              <div className="px-6 pb-6 animate-fade-in">
                <div className="w-full h-px bg-gray-300 my-4"></div>
                <button
                  className="bg-[#362fc1] text-white rounded-full w-full py-3 font-semibold my-6"
                  onClick={() => router.push('/documents/dni')}
                >
                  Ver DNI Digital
                </button>
                <p className="text-sm text-gray-500 mb-1">
                  Datos suministrados por <br />
                  <span className="text-[#8181f2] font-semibold">RENAPER</span>
                </p>
                <div className="w-full h-px bg-gray-300 my-4"></div>
                <p className="text-sm text-[#333333] mb-3">
                  Recordá que podés solicitar el DNI para vos y tus hijos y
                  tenerlos disponibles en la App.
                </p>
                <button className="border border-[#362fc1] text-[#362fc1] rounded-full w-full py-3 font-semibold mb-2">
                  Solicitar DNI Digital
                </button>
                <div className="w-full h-px bg-gray-300 my-4"></div>
                <div className="text-sm text-[#362fc1] mt-2 flex items-center gap-2">
                  <span className="text-xl">
                    <CircleAlert />
                  </span>
                  Cambié o voy a cambiar de dispositivo
                </div>
              </div>
            )}
          </div>

          {/* Licencia */}
          <div className="bg-white border border-gray-200 rounded-lg mt-6 max-w-md mx-4 shadow-lg overflow-hidden transition-all">
            <button
              onClick={() => toggleSection('licencia')}
              className="w-full p-4 flex flex-row gap-x-2 items-center"
            >
              <div className="border-r border-gray-300 pr-4 flex items-center justify-center">
                <img
                  src="/credencial_licencia_conducir.svg"
                  alt="Licencia"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-lg font-bold text-[#333333] ml-2 flex-1 text-left">
                Licencia Nacional de Conducir
              </h4>
              <ChevronDown
                className={`text-gray-500 transition-transform${
                  openSection === 'licencia' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Contenido desplegable Licencia */}
            {openSection === 'licencia' && (
              <div className="px-6 pb-6 animate-fade-in">
                <div className="w-full h-px bg-gray-300 my-4"></div>
                <p className="text-sm text-[#333333]">
                  Si te retuvieron o inhabilitaron la licencia física, no podés
                  circular con la licencia digital. Hacerlo constituye un
                  delito.
                </p>
                <div className="w-full h-px bg-gray-300 my-4"></div>
                <div>
                  <p className="text-lg font-medium text-[#333333]">
                    Fecha de vencimiento
                  </p>
                  <span className="text-lg font-bold text-[#333333]">
                    07/10/2029
                  </span>
                  <div className="flex items-center gap-2 my-4">
                    <span className="inline-block w-4 h-4 rounded-full bg-green-800"></span>
                    <span className="text-[#333333] font-semibold">
                      Vigente
                    </span>
                  </div>
                  <p className="text-[#362fc1] underline cursor-pointer mt-4">
                    Ver más información
                  </p>
                </div>
                <div className="w-full h-px bg-gray-300 my-4"></div>
                <p className="text-sm text-[#333333]">
                  Si los datos o vigencia de tu licencia están desactualizados{' '}
                  <span className="text-[#362fc1] underline cursor-pointer mt-4">
                    solicitá la rectificación
                  </span>{' '}
                  a la Agenvia Nacional de Seguridad Vial.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
