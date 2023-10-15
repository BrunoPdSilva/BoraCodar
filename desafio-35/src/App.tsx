import { Header } from "./components/Header"
import { Card } from "./components/Card"
import { Slider } from "./components/Slider"
import { Timer } from "./components/Timer"
import { ChevronRight } from "lucide-react"

export function App() {
  return (
    <div className="flex flex-col m-14">
      <Header />
      <main className="mt-[76px] flex justify-center gap-[102px]">
        <Card />
        <section className="w-80 flex flex-col gap-9">
          <Slider label="Meta diária" value="3000" />
          <Slider label="Quantidade por timer" value="300" />

          <Timer />
          <button className="w-full p-4 flex justify-center gap-2 bg-blue hover:bg-blue_dark transition-colors duration-200 ease-in-out rounded-md text-gray-500 font-medium font-poppins tracking-wide text-base">
            Começar <ChevronRight strokeWidth={1.5} size={24} />
          </button>
        </section>
      </main>
    </div>
  )
}
