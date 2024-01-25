import { Star as StarIcon } from "@phosphor-icons/react"

type StarProps = {
  value: number
}

export function Star({ value }: StarProps) {
  return (
    <button
      className="text-gray-200 hover:text-yellow transition-colors duration-75 ease-in p-2"
      data-value={value}
    >
      <StarIcon size={32} weight="fill" />
    </button>
  )
}
