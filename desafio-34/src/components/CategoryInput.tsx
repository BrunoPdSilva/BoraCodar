"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function CategoryInput() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative flex">
      <button
        type="button"
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex h-10 w-[72px] items-center gap-2 rounded-md border bg-gray-400 w-full border-gray-300 p-3 text-[10px] text-gray-200"
      >
        Selecione <ChevronDown size={16} className="text-gray-200" />
      </button>

      <ul
        className={`absolute right-0 top-11 z-50 ${
          showDropdown ? "block" : "hidden"
        }`}
      >
        <li>
          <button
            type="button"
            className="flex h-10 w-[72px] cursor-pointer items-center gap-2 rounded-t-md border border-gray-300 bg-gray-400 p-3 text-sm tracking-wide text-gray-100 transition-colors duration-200 ease-in-out hover:bg-gray-300 focus:bg-gray-300"
          >
            Un.
          </button>
        </li>
        <li>
          <button
            type="button"
            className="flex h-10 w-[72px] cursor-pointer items-center gap-2 border border-gray-300 bg-gray-400 p-3 text-sm tracking-wide text-gray-100 transition-colors duration-200 ease-in-out hover:bg-gray-300 focus:bg-gray-300"
          >
            L
          </button>
        </li>
        <li>
          <button
            type="button"
            className="flex h-10 w-[72px] cursor-pointer items-center gap-2 rounded-b-md border border-gray-300 bg-gray-400 p-3 text-sm tracking-wide text-gray-100 transition-colors duration-200 ease-in-out hover:bg-gray-300 focus:bg-gray-300"
          >
            Kg
          </button>
        </li>
      </ul>
    </div>
  );
}
