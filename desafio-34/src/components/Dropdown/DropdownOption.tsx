"use client"

import { Check } from "lucide-react";
import { useContext } from "react";
import { OptionsContext } from "./DropdownRoot";

interface DropdownOptionProps {
  value: string;
  name: string;
  icon?: JSX.Element;
  iconColor?: string;
}

export function DropdownOption({ icon, value, name }: DropdownOptionProps) {
  const { setShowOptions, setValue } = useContext(OptionsContext)

  function handleSelect(selectedValue: string) {
    setValue(selectedValue)
    setShowOptions(false);
  }

  return (
    <li className="p-3 flex justify-between items-center gap-2 border-b border-b-gray-300 hover:bg-gray-300 transition-colors duration-200 ease-in-out relative">
      <input
        type="radio"
        name={name}
        value={value}
        className="appearance-none z-10 absolute inset-0 cursor-pointer peer"
        onChange={e => handleSelect(e.target.value)}
      />

      <div className="flex items-center gap-2 h-4">
        {icon && icon}
        <p className="text-gray-100 h-4 text-sm leading-none tracking-wide">
          {value}
        </p>
      </div>

      <Check size={12} className="text-purple-100 hidden peer-checked:block" />
    </li>
  );
}
