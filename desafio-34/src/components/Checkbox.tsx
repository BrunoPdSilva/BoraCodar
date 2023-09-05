"use client";

import { toggleIsCompleted } from "@/app/actions";
import { Check } from "lucide-react";

interface CheckboxProps {
  isCompleted: boolean;
  id: string;
}

export function Checkbox({ isCompleted, id }: CheckboxProps) {
  return (
    <label className="relative h-4 w-4">
      <input
        type="checkbox"
        defaultChecked={isCompleted}
        onChange={(e) => toggleIsCompleted(e.target.checked, id)}
        className="focus-visible::bg-purple-200 peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-purple-100 transition-colors duration-200 ease-in-out checked:border-green-200 checked:bg-green-200  checked:hover:bg-green-100 checked:focus-visible:bg-green-100"
      />
      <Check
        size={12}
        strokeWidth={3}
        className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1 transform peer-checked:block"
      />
    </label>
  );
}
