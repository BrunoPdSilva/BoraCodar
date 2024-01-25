export function LeaveComment() {
  return (
    <div className="flex flex-col text-center font-inter mb-10">
      <h1 className="text-xl font-bold leading-130 text-gray-500 mb-2">
        Deixe um comentário
      </h1>
      <p className="text-base font-normal leading-150 text-gray-400 mb-6">
        Conte sobre o motivo da sua avaliação
      </p>

      <textarea
        className="w-full h-[7.5rem] rounded-lg bg-gray-200 p-3 text-gray-500 focus:outline-purple resize-none placeholder:font-inter placeholder:leading-150 placeholder:text-base placeholder:font-normal placeholder:text-gray-300"
        placeholder="Escreva aqui seu comentário"
      />
    </div>
  )
}
