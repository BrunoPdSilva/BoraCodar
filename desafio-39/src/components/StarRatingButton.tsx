import { Star } from "@phosphor-icons/react"

type StarRatingButtonProps = {
  value: number
}

export function StarRatingButton({ value }: StarRatingButtonProps) {
  return (
    <button
      className="text-gray-200 hover:text-yellow transition-colors duration-75 ease-in p-2"
      data-value={value}
    >
      <Star size={32} weight="fill" />
    </button>
  )
}
