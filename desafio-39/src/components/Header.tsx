import { ArrowLeft } from "@phosphor-icons/react"

type HeaderProps = {
  image: string
  step: number
  onClick(): void
}

export function Header({ image, step, onClick }: HeaderProps) {
  return (
    <header className="w-full h-[11.5rem] bg-gradient_light rounded-t-[20px] flex justify-center relative">
      <button
        type="button"
        className={`${step > 0 ? "block" : "hidden"}`}
        onClick={onClick}
      >
        <ArrowLeft size={24} className="absolute text-gray-100 left-6 top-6" />
      </button>
      <img
        src={image}
        alt="Imagem de um Smartwatch Amazfit Bip U Pro"
        className="w-[8.75rem] h-[14.5rem] object-cover -mt-12"
      />
    </header>
  )
}
