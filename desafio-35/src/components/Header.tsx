import joia from "../assets/joia.svg"
import aceno from "../assets/aceno.svg"

export function Header() {
  return (
    <header className="flex gap-[10px] text-white">
      <img src={joia} alt="Profile image" className="w-16 h-16" />
      <div>
        <h2 className="text-2xl font-light leading-[120%]">Boa tarde,</h2>
        <h3 className="text-2xl font-semibold leading-[120%] mt-1 flex gap-1">
          Bruno <img src={aceno} className="w-6 h-6" alt="" />{" "}
        </h3>
      </div>
    </header>
  )
}
