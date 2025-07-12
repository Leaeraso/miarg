export function Holidays() {
  return (
    <section className="bg-[#accde9] border border-gray-200 rounded-lg p-4 my-6 max-w-md mx-4 shadow-lg">
      <button className="flex flex-row gap-x-4">
        <img src="/icono-ilustracion-calendario@4x.svg" alt="proximo feriado" />
        <div className="text-left flex-1">
          <h3 className="text-[#333333] text-lg font-medium text-left">
            Próximo feriado
          </h3>
          <span className="text-xl font-semibold text-[#333333] my-3 text-left">
            15 de Agosto
          </span>
          <p className="text-[#333333] text-sm font-medium text-left w-full">
            <span className="font-semibold text-sm text-[#333333] my-3 text-left">
              15 y 17 de Agosto
            </span>
            . Paso a la inmortalidad del Gral. José de San Martin. EL 15/8 es
            feriado con fines turísticos
          </p>
        </div>
      </button>
    </section>
  )
}
