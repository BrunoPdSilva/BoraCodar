import { HSL } from "../types/global";

interface Props {
  hsl: HSL;
}

export function Circle({ hsl }: Props) {
  const { hue, saturation, brightness } = hsl;

  return (
    <div className="circle-container">
      <div
        className="circle"
        style={{
          backgroundColor: `hsl(${hue}, ${saturation}%, ${brightness}%, 1)`,
          boxShadow: `0rem 0rem 5.3rem 1.3rem hsl(${hue}, ${saturation}%, ${brightness}%, 0.91)`,
        }}
      ></div>
    </div>
  );
}
