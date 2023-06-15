import { Palette, Sun, CircleHalf } from "phosphor-react";
import { useState } from "react";

type HSL = {
  hue: number;
  brightness: number;
  saturation: number;
};

function App() {
  const [hsl, setHsl] = useState<HSL>({
    hue: 272,
    saturation: 98,
    brightness: 50,
  });

  function handleHueChange(e: React.ChangeEvent<HTMLInputElement>) {
    setHsl({ ...hsl, hue: parseInt(e.target.value) });
  }

  function handleSaturationChange(e: React.ChangeEvent<HTMLInputElement>) {
    setHsl({ ...hsl, saturation: parseInt(e.target.value) });
  }

  function handleBrightnessChange(e: React.ChangeEvent<HTMLInputElement>) {
    setHsl({ ...hsl, brightness: parseInt(e.target.value) });
  }

  return (
    <div id="app">
      <div className="circle-container">
        <div
          className="circle"
          style={{
            backgroundColor: `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.brightness}%, 1)`,
            boxShadow: `0rem 0rem 5.3rem 1.3rem hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.brightness}%, 0.91)`,
          }}
        ></div>
      </div>

      <h1>Ajustes de iluminação</h1>

      <section className="controls">
        <div>
          <Palette size={24} color="#ffffff" />
          <input
            className="hue"
            type="range"
            min={0}
            max={360}
            step={1}
            value={hsl.hue}
            onChange={e => handleHueChange(e)}
            style={
              {
                "--thumb-color": `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.brightness}%, 1)`,
              } as React.CSSProperties
            }
          />
        </div>
        <div>
          <CircleHalf size={24} color="#ffffff" />
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={hsl.brightness}
            onChange={e => handleBrightnessChange(e)}
          />
        </div>
        <div>
          <Sun size={24} color="#ffffff" />
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={hsl.saturation}
            onChange={e => handleSaturationChange(e)}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
