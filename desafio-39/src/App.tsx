import { useState } from "react"
import { LeaveComment } from "./components/LeaveComment"
import { StarRater } from "./components/StarRater"
import { Header } from "./components/Header"
import { Button } from "./components/Button"

import watch from "./assets/watch.png"

export function App() {
  const [step, setStep] = useState(1)

  return (
    <div className="h-screen bg-gradient_dark flex items-center justify-center">
      <main className="max-w-[25.625rem] w-full h-[560px] bg-gray-100 rounded-[20px]">
        <Header image={watch} step={step} onClick={() => setStep(0)} />

        <section className="p-12 flex flex-col">
          {step === 0 ? (
            <>
              <StarRater productName="Smartwatch Amazfit Bip U Pro" />
              <Button text="Confirmar" onClick={() => setStep(1)} />
            </>
          ) : (
            <>
              <LeaveComment />
              <Button text="Enviar" type="submit" onClick={() => setStep(1)} />
            </>
          )}
        </section>
      </main>
    </div>
  )
}
