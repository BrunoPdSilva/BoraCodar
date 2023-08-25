"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function QuantityInput() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <label htmlFor="quantity" className="group">
      <p className="mb-2 text-xs leading-[100%] text-gray-200 transition-colors duration-300 ease-in-out group-focus-within:text-purple-100">
        Quantidade
      </p>
      <div className="relative flex">
        <input
          type="number"
          defaultValue="1"
          className="flex h-10 w-[88px] appearance-none items-center rounded-s-md border border-gray-300 bg-gray-500 p-3 text-base text-gray-100 outline-none group-focus-within:border-purple-100"
        />

        <button
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex h-10 w-[72px] items-center gap-2 rounded-e-md border border-gray-300 p-3 text-[10px] text-gray-200"
        >
          UN. <ChevronDown size={16} className="text-gray-200" />
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
    </label>
  );
}
