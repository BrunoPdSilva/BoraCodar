import { StarRater } from "./components/StarRater"
import { Header } from "./components/Header"
import { Button } from "./components/Button"

import watch from "./assets/watch.png"

export function App() {
  return (
    <div className="h-screen bg-gradient_dark flex items-center justify-center">
      <main className="max-w-[25.625rem] w-full h-[560px] bg-gray-100 rounded-[20px]">
        <Header image={watch} />

        <section className="p-12 flex flex-col">
          <StarRater productName="Smartwatch Amazfit Bip U Pro" />

          <Button text="Confirmar" />
        </section>
      </main>
    </div>
  )
}
