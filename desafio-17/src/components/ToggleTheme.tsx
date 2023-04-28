import { Moon, Plus, SignOut, Sun } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  isLightTheme: boolean;
  setIsLightTheme: Dispatch<SetStateAction<boolean>>;
}

export function ToggleTheme({ isLightTheme, setIsLightTheme }: Props) {
  return (
    <button className="toggleTheme" onClick={() => setIsLightTheme(!isLightTheme)}>
      {isLightTheme ? (
        <Moon size={26} weight="fill" />
      ) : (
        <Sun size={26} weight="fill" />
      )}
    </button>
  )
}
