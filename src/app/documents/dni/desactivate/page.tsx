'use client'

import { NavBar } from '@/app/components/nav-bar'
import { CircleAlert } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function DesactivateDni() {
  const router = useRouter()
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <NavBar />
      <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6 max-w-md shadow-lg mx-4 flex flex-col items-center">
        <CircleAlert className="h-24 w-24 text-[#362fc1]" />
        <h3 className="text-xl font-semibold text-[#333333] text-center py-4">
          ¿Estás seguro que querés desactivar este DNI?
        </h3>
        <p className="text-[#333333] text-md font-light text-center pt-2">
          Recorda que si desactivas un DNI digital, vas a dejar de verlo en este
          dispositivo.
        </p>
        <p className="text-[#333333] text-md font-light text-center pb-2">
          Esta opción estará disponible solamente 3 veces al año.
        </p>
        <button className="text-white my-4 bg-[#362fc1] border-2 rounded-full px-8 py-2">
          Continuar
        </button>
        <button
          className="text-[#362fc1] my-4 border border-2 border-[#362fc1] rounded-full px-8 py-2"
          onClick={() => router.push('/documents/dni')}
        >
          Cancelar
        </button>
      </div>
    </main>
  )
}
