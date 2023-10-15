type SliderProps = {
  label: string,
  value: string
}

export function Slider({ label, value }: SliderProps) {
  return (
    <div className="w-full">
      <header className="w-full flex justify-between items-center mb-2">
        <h2 className="text-base tracking-wide text-blue font-medium">{label}</h2>
        <span className="text-cs tracking-wide text-violet-100">{value}ml</span>
      </header>

      <div className="w-full h-8 flex items-center">
         <div className="w-full h-[6px] bg-gray-200 rounded-md"></div>
      </div>
    </div>
  )
}
