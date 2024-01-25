import { Star as StarIcon } from "@phosphor-icons/react"

type StarProps = {
  isActive: boolean
  onClick(): void
  onMouseEnter(): void
}

export function Star({ isActive, onClick, onMouseEnter }: StarProps) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`${
        isActive ? "text-custom_yellow" : "text-gray-200"
      } p-2 transition-colors duration-75 ease-in-out`}
    >
      <StarIcon size={32} weight="fill" className="pointer-events-none" />
    </button>
  )
}
