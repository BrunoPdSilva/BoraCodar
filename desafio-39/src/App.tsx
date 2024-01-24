import { Header } from "./components/Header"
import { ArrowRight } from "@phosphor-icons/react"

import watch from "./assets/watch.png"
import { StarRating } from "./components/StarRating"

export function App() {
  return (
    <div className="h-screen bg-gradient_dark flex items-center justify-center">
      <main className="max-w-[25.625rem] w-full h-[560px] bg-gray-100 rounded-[20px]">
        <Header image={watch} />

        <section className="p-12 flex flex-col gap-10">
          <div className="flex flex-col text-center font-inter">
            <h1 className="text-xl font-bold leading-130 text-gray-500 mb-2">
              Avalie o produto
            </h1>
            <p className="text-base font-normal leading-150 text-gray-400 mb-8">
              O que você achou do produto{" "}
              <a href="#" className="text-purple_dark">
                Smartwatch Amazfit Bip U Pro
              </a>
              ?
            </p>

            <StarRating />
          </div>

          <button
            type="button"
            className="font-inter text-base font-bold leading-150 text-gray-100 w-full h-14 rounded-lg disabled:opacity-50 bg-purple hover:bg-purple_dark transition-colors duration-75 ease-in flex items-center justify-between gap-4 px-5 py-4"
          >
            Confirmar
            <ArrowRight size={24} weight="bold" />
          </button>
        </section>
      </main>
    </div>
  )
}
