import { ChangeEvent, useEffect, useRef, useState } from "react";
import highQualityImage from "./assets/image-1.png";
import lowQualityImage from "./assets/image-2.png";

export function App() {
  const [width, setWidth] = useState(50);
  const dragRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(width);
  }, [width]);

  function change(e: ChangeEvent<HTMLInputElement>) {
    setWidth(Number(e.target.value));
  }

  return (
    <div className="h-screen w-screen bg-neutral-950 flex relative">
      <div className="h-full w-[100%] overflow-hidden relative">
        <div className="bg-high h-screen w-screen bg-no-repeat bg-cover"></div>
      </div>

      <input
        type="range"
        className="absolute z-50 w-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 appearance-none bg-transparent thumb outline-none"
        min={0}
        max={100}
        defaultValue={50}
        step={0.01}
        onChange={e => change(e)}
      />

      <div
        className="bg-white h-screen w-2 absolute z-50 pointer-events-none"
        style={{ left: `${width}%` }}
      ></div>

      <div
        className="h-screen w-screen overflow-hidden absolute"
        style={{ width: `${width}%` }}
      >
        <div className="bg-low h-screen w-screen bg-no-repeat bg-cover"></div>
      </div>
    </div>
  );
}

/* 
      <input
        type="range"
        className="absolute z-50 w-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 appearance-none bg-transparent thumb outline-none"
        min={0}
        max={100}
        defaultValue={50}
        step={0.01}
        onChange={e => change(e)}
      />

      <div
        className="bg-white h-screen w-2 absolute z-50 pointer-events-none"
        style={{ left: `${width}%` }}
      ></div> */
