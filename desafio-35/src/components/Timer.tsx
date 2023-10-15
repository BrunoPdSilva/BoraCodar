export function Timer() {
  return (
    <div className="flex justify-center items-center h-16 gap-3">
      <div className="flex items-center gap-1">
        <div className="w-16 h-16 flex items-center justify-center bg-gray-400 rounded-[10px] outline outline-1 outline-gray-200">
          <span className="text-[32px] text-gray-100 tracking-wide">00</span>
        </div>
        <h3 className="text-gray-200 font-medium text-base">h</h3>
      </div>
      <p className="text-[32px] text-gray-100 tracking-wide">:</p>
      <div className="flex items-center gap-1">
        <div className="w-16 h-16 flex items-center justify-center bg-gray-400 rounded-[10px] outline outline-1 outline-gray-200">
          <span className="text-[32px] text-gray-100 tracking-wide">00</span>
        </div>
        <h3 className="text-gray-200 font-medium text-base">m</h3>
      </div>
    </div>
  )
}
