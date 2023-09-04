"use client";

import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import { OptionsContext } from "./DropdownRoot";

interface DropdownTriggerProps {
  id: string;
  fullRounded?: boolean;
  holder?: string;
}

export function DropdownTrigger({ id, fullRounded, holder }: DropdownTriggerProps) {
  const { showOptions, setShowOptions, value } = useContext(OptionsContext);

  const placeholder = holder || "selecione a categoria";

  return (
    <div className="dropdown-trigger relative">
      <input
        type="checkbox"
        name={id}
        id={id}
        className="peer absolute inset-0 z-10 cursor-pointer appearance-none outline-none"
        onChange={(e) => setShowOptions(e.target.checked)}
        checked={showOptions}
      />

      <div className={`relative flex h-10 w-full items-center justify-between gap-2 overflow-hidden ${fullRounded ? "rounded-md" : "rounded-e-md"} border border-gray-300 bg-gray-400 p-3 transition-colors duration-200 ease-in-out peer-checked:border-purple-200 peer-focus:border-purple-200`}>
        <span
          className={`text-sm leading-[16px] tracking-wide ${
            value ? "text-gray-100" : "text-gray-200"
          }`}
        >
          {value ? value : placeholder}
        </span>

        <ChevronDown
          size={16}
          className="transform text-gray-200 transition-transform peer-checked:rotate-180 peer-checked:text-purple-100"
        />
      </div>
    </div>
  );
}
