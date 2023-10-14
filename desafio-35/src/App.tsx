import { Header } from "./components/Header"
import { Card } from "./components/Card"

export function App() {
  return (
    <div className="h-screen bg-gray-500 font-poppins p-14">
      <main>
        <Header />
        <section className="mt-12 flex justify-center">
          <Card />
        </section>
      </main>
    </div>
  )
}
