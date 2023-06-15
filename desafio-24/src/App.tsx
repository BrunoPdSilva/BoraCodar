import { Palette, Sun, CircleHalf } from "phosphor-react";

function App() {

  return (
    <div id="app">
      <div className="circle-container">
        <div className="circle"></div>
      </div>

      <h1>Ajustes de iluminação</h1>

      <section className="controls">
        <div>
          <Palette size={24} color="#ffffff" />
          <input type="range" min={0} max={360} />
        </div>
        <div>
          <Sun size={24} color="#ffffff" />
          <input type="range" min={0} max={100} />
        </div>
        <div>
          <CircleHalf size={24} color="#ffffff" />
          <input type="range" min={0} max={100} />
        </div>
      </section>
    </div>
  )
}

export default App
