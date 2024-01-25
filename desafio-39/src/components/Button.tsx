import { ArrowRight } from "@phosphor-icons/react"

type ButtonProps = {
  type?: "button" | "submit"
  text: string
}

export function Button({ type = "button", text }: ButtonProps) {
  return (
    <button
      type={type}
      className="font-inter text-base font-bold leading-150 text-gray-100 w-full h-14 rounded-lg disabled:opacity-50 bg-purple hover:bg-purple_dark transition-colors duration-75 ease-in flex items-center justify-between gap-4 px-5 py-4"
    >
      {text}
      <ArrowRight size={24} weight="bold" />
    </button>
  )
}
