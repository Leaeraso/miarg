export function ProfileProgress() {
  return (
    <section className="bg-[#eccacb] border border-gray-200 rounded-lg p-4 my-6 max-w-md mx-4 shadow-lg flex flex-row items-center gap-x-4">
      <button className="flex flex-row gap-x-4 items-center">
        <img src="/icono-ilustracion-perfil@4x.svg" alt="progreso de perfil" />
        <h3 className="font-bold text-lg text-[#333333] my-3 text-center">
          Mantené tu perfil actualizado
        </h3>
      </button>
    </section>
  )
}
