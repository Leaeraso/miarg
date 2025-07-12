export function Shifts() {
  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6 max-w-md mx-4 shadow-lg flex flex-row gap-x-4">
        <img
          src="/turno_empty.svg"
          alt="icono-turno"
          className="m-3 w-16 h-16"
        />
        <div className="flex flex-col justify-center items-start pb-4">
          <p className="text-[#333333] text-lg font-medium text-left">
            No tenés turnos programados
          </p>
          <button className="bg-[#362fc1] px-3 py-1 border rounded-full">
            Sacar turno
          </button>
        </div>
      </div>
    </div>
  )
}
