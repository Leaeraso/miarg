'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { NavBar } from '../../../../public/nav-bar'
import info from '../../../../info.json'
import { ChevronDown, Eye, QrCode, X } from 'lucide-react'

export default function DniDigital() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [openSection, setOpenSection] = useState<boolean>(false)

  const toggleSection = () => {
    setOpenSection(!openSection)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsFlipped(true),
    onSwipedRight: () => setIsFlipped(false),
    trackTouch: true,
  })

  return (
    <>
      <main className="min-h-screen bg-[#f0f0f0]">
        <NavBar />
        <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6 max-w-md shadow-lg mx-4 flex flex-col">
          <h3 className="text-xl font-semibold text-[#333333] mt-2">
            {`${info.name} ${info.surname}`}
          </h3>
          <section className="flex justify-center">
            <div {...handlers} className="w-full max-w-sm">
              <div className="relative w-full aspect-[3/2] [perspective:1000px]">
                <div
                  className={`absolute w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* Frente */}
                  <div className="absolute w-full h-full [backface-visibility:hidden]">
                    <Image
                      src="/me-front.jpg"
                      alt="DNI frente"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded"
                      priority
                    />
                    <p className="absolute top-[107px] left-[156px] text-xs font-medium text-black/90 bg-white/70 px-1 rounded">
                      2000
                    </p>
                    <p className="absolute bottom-[9px] left-[2px] text-sm font-bold text-black/80 bg-white/70 px-1 rounded">
                      43.137.848
                    </p>
                  </div>
                  {/* Dorso */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <Image
                      src="/me-back.jpg"
                      alt="DNI dorso"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <p className="text-xs text-[#333333] mt-4 text-center">
            Última actualización: {formatDateTime(new Date())}
          </p>
          <div className="flex flex-col border-t border-gray-300 mt-4">
            <div className="flex flex-row">
              <button className="flex flex-row items-center gap-2 justify-center flex-1 p-2 border-r border-gray-300">
                <Eye className="text-[#362fc1]" />
                <p className="text-xs text-[#333333] text-center">
                  Ver detalle
                </p>
              </button>
              <button className="flex flex-row items-center gap-2 justify-center flex-1 p-2">
                <X className="text-[#362fc1]" />
                <p className="text-xs text-[#333333] text-center">
                  Desactivar DNI
                </p>
              </button>
            </div>
            <button
              className="flex flex-row items-center gap-2 justify-center p-2 border-t border-gray-300"
              onClick={() => toggleSection()}
            >
              <QrCode className="text-[#362fc1]" />
              <p className="text-xs text-[#333333] text-center">
                Verificar código QR
              </p>
              <ChevronDown
                className={`text-gray-500 transition-transform ${
                  openSection ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection && (
              <div className="bg-white border border-gray-200 rounded-lg mt-6 max-w-[75%] mx-auto shadow-lg overflow-hidden transition-all">
                <img src="/qr-code.jpg" alt="QR Code" />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

const formatDateTime = (date: Date) => {
  const pad = (n: number) => n.toString().padStart(2, '0')
  const dateNow = `${pad(date.getDate())}/${pad(
    date.getMonth() + 1
  )}/${date.getFullYear()} ${pad(date.getHours())}:${pad(
    date.getMinutes()
  )}:${pad(date.getSeconds())} hs`
  return dateNow
}
