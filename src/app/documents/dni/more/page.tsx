'use client'

import { NavBar } from '@/app/components/nav-bar'
import info from '../../../../../info.json'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ViewMore() {
  const router = useRouter()
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <NavBar />
      <button onClick={() => router.back()}>
        <ArrowLeft className="text-[#362fc1] w-12 h-12 mx-4 mt-2 bg-white rounded-full px-3" />
      </button>
      <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6 max-w-md shadow-lg mx-4 flex flex-col">
        <div className="mb-4 mx-auto">
          <img src="/more.jpg" alt="more details" />
        </div>
        <div>
          <img src="/more-qr.jpg" alt="more details qr code" />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-6">
          <div className="rounded p-2 flex justify-start flex-col">
            <h5 className="text-[#333333] text-md font-light text-left">DNI</h5>
            <p className='className="text-xl font-semibold text-[#333333]'>
              {info.dni}
            </p>
          </div>
          <div className="rounded p-2 flex justify-start flex-col">
            <div className="rounded p-2 flex justify-start flex-col">
              <h5 className="text-[#333333] text-md font-light text-left">
                Número de tramite
              </h5>
              <p className='className="text-xl font-semibold text-[#333333]'>
                {info.number_of_process}
              </p>
            </div>
          </div>
          <div className="rounded p-2 flex justify-start flex-col">
            <div className="rounded p-2 flex justify-start flex-col">
              <h5 className="text-[#333333] text-md font-light text-left">
                Fecha de emisión
              </h5>
              <p className="text-xl font-semibold text-[#333333]">
                {info.date_of_issue}
              </p>
            </div>
          </div>
          <div className="rounded p-2 flex justify-start flex-col">
            <div className="rounded p-2 flex justify-start flex-col">
              <h5 className="text-[#333333] text-md font-light text-left">
                Fecha de vencimiento
              </h5>
              <p className='className="text-xl font-semibold text-[#333333]'>
                {info.date_of_expiration}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 my-4"></div>
        <div>
          <ul className="flex flex-col gap-y-2">
            <li>
              <h5 className="text-[#333333] text-md font-light text-left">
                Nombre
              </h5>
              <p className='className="text-xl font-semibold text-[#333333]'>
                {info.name}
              </p>
            </li>
            <li>
              <h5 className="text-[#333333] text-md font-light text-left">
                Apellido
              </h5>
              <p className='className="text-xl font-semibold text-[#333333]'>
                {info.surname.toUpperCase()}
              </p>
            </li>
            <li>
              <h5 className="text-[#333333] text-md font-light text-left">
                Sexo
              </h5>
              <p className='className="text-xl font-semibold text-[#333333]'>
                {info.sex}
              </p>
            </li>
            <li>
              <h5 className="text-[#333333] text-md font-light text-left">
                Fecha de nacimiento
              </h5>
              <p className='className="text-xl font-semibold text-[#333333]'>
                {info.date_of_birth.replace('/', '-')}
              </p>
            </li>
            <li>
              <h5 className="text-[#333333] text-md font-light text-left">
                Nacionalidad
              </h5>
              <p className='className="text-xl font-semibold text-[#333333]'>
                {info.nationality}
              </p>
            </li>
            <li>
              <h5 className="text-[#333333] text-md font-light text-left">
                Lugar de nacimiento
              </h5>
              <p className='className="text-xl font-semibold text-[#333333]'>
                {info.place_of_birth}
              </p>
            </li>
            <li>
              <h5 className="text-[#333333] text-md font-light text-left">
                Domicilio
              </h5>
              <p className='className="text-xl font-semibold text-[#333333]'>
                {info.address.toUpperCase()}
              </p>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </main>
  )
}
