import { Palette, Sun, CircleHalf } from "phosphor-react";
import { useState } from "react";
import { Circle } from "./components/Circle";
import { Control } from "./components/Control";
import { HSL } from "./types/global";

export function App() {
  const [hsl, setHsl] = useState<HSL>({ hue: 272, saturation: 98, brightness: 50 });

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
      <Circle hsl={hsl} />

      <h1>Ajustes de iluminação</h1>

      <section className="controls">
        <Control
          hsl={hsl}
          handleChange={handleHueChange}
          isHue={true}
          icon={<Palette />}
          value={hsl.hue}
        />
        <Control
          hsl={hsl}
          handleChange={handleSaturationChange}
          icon={<CircleHalf />}
          value={hsl.saturation}
        />
        <Control
          hsl={hsl}
          handleChange={handleBrightnessChange}
          icon={<Sun />}
          value={hsl.brightness}
        />
      </section>
    </div>
  );
}
