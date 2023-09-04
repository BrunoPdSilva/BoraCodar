"use client"

import { ReactNode, createContext, useEffect, useState } from "react";

interface DropdownRootProps {
  children: ReactNode;
  inlineDropdown?: boolean;
}

interface optionsContext {
  showOptions: boolean;
  setShowOptions: (value: boolean) => void;
  value: string;
  setValue: (value: string) => void;
}

const initialContext = {
  showOptions: false,
  value: "",
  setShowOptions: () => {},
  setValue: () => {},
}

export const OptionsContext = createContext<optionsContext>(initialContext);

export function DropdownRoot({ children }: DropdownRootProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState("");

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") setShowOptions(false);
  }

  useEffect(() => {
    if (showOptions) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [showOptions])

  return (
    <div className="dropdown max-w-[232px] w-full flex flex-col gap-2 relative">
      <OptionsContext.Provider value={{ showOptions, setShowOptions, value, setValue }}>
        {children}
      </OptionsContext.Provider>
    </div>
  );
}
