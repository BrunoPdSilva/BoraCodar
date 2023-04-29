import { CloudMoon, Sun } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  isLightTheme: boolean;
  setIsLightTheme: Dispatch<SetStateAction<boolean>>;
}

export function ToggleTheme({ isLightTheme, setIsLightTheme }: Props) {
  return (
    <div>
      <input
        type="checkbox"
        id="toggleTheme"
        onChange={e => setIsLightTheme(e.target.checked)}
        checked={isLightTheme}
      />
      <label htmlFor="toggleTheme" className="toggleTheme">
        <Sun size={32} color="#FFCA3A" weight="bold" />
        <CloudMoon size={32} color="#FFFFFF" weight="bold" />
      </label>
    </div>
  );
}
