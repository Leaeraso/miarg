import info from '../../../info.json'
import { Sarampion } from './sarampion'
import { Shifts } from './shifts'

export function Welcome() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-[#333333] mt-10">
          ¡Hola {info.name}!
        </h1>

        <div className="px-4 pt-4">
          <p className="text-[#333333] text-lg font-normal text-center mt-4">
            Gestioná trámites, sacá turnos, accedé a tus <br />
            credenciales y recibí información personalizada.
          </p>
        </div>
      </div>

      <Sarampion />
      <Shifts />
    </>
  )
}
