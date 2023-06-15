import { HSL } from "../types/global";

interface Props {
  hsl: HSL;
  icon: JSX.Element;
  isHue?: boolean;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Control({ hsl, icon, isHue, value, handleChange }: Props) {
  const { hue, saturation, brightness } = hsl;

  return (
    <div>
      {icon}
      <input
        className={isHue ? "hue" : ""}
        type="range"
        min={0}
        max={isHue ? 360 : 100}
        step={1}
        value={value}
        onChange={e => handleChange(e)}
        style={
          isHue
            ? ({
                "--thumb-color": `hsl(${hue}, ${saturation}%, ${brightness}%, 1)`,
              } as React.CSSProperties)
            : {}
        }
      />
    </div>
  );
}
