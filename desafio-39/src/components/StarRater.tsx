import { useState } from "react"
import { Star } from "./Star"

type StarRaterProps = {
  productName: string
}

export function StarRater({ productName }: StarRaterProps) {
  const [selected, setSelected] = useState(0)
  const [starsHovered, setStarsHovered] = useState(0)

  return (
    <div className="flex flex-col text-center font-inter mb-10">
      <h1 className="text-xl font-bold leading-130 text-gray-500 mb-2">
        Avalie o produto
      </h1>
      <p className="text-base font-normal leading-150 text-gray-400 mb-8">
        O que você achou do produto{" "}
        <a href="#" className="text-purple_dark">
          {productName}
        </a>
        ?
      </p>

      <section>
        <div
          className="flex justify-between"
          onMouseLeave={() => setStarsHovered(0)}
        >
          {[1, 2, 3, 4, 5].map(starValue => (
            <Star
              key={starValue}
              isActive={starValue <= selected || starValue <= starsHovered}
              onClick={() => setSelected(starValue)}
              onMouseEnter={() => setStarsHovered(starValue)}
            />
          ))}
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
    </div>
  )
}
