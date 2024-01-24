import { StarRatingButton } from "./StarRatingButton"

export function StarRating() {
  const rating = [1, 2, 3, 4, 5]

  return (
    <section>
      <div className="flex justify-between">
        {rating.map(value => <StarRatingButton key={value} value={value} />)}
      </div>

      <div className="flex justify-between items-center">
        <span className="w-12 text-gray-300 text-xs leading-150 font-normal font-inter">
          Ruim
        </span>
        <span className="w-12 text-gray-300 text-xs leading-150 font-normal font-inter">
          Bom
        </span>
      </div>
    </section>
  )
}
