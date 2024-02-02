import { ArrowRight, Heart } from "lucide-react"
import { CircleButton } from "./components/CircleButton"
import { useState } from "react"

export function App() {
  const [isChecked, setIsChecked] = useState(false)

  function goBack() {
    return ""
  }

  return (
    <main className="h-screen flex justify-center items-center">
      <CircleButton
        icon={Heart}
        isChecked={isChecked}
        onClick={() => setIsChecked(prev => !prev)}
      />

      <CircleButton icon={ArrowRight} onClick={goBack} />
    </main>
  )
}
