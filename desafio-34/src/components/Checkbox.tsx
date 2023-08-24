"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

interface CheckboxProps {
  isCompleted: boolean;
}

export function Checkbox({ isCompleted }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  return (
    <label className="relative h-4 w-4">
      <input
        type="checkbox"
        className={clsx(
          "peer h-4 w-4 cursor-pointer appearance-none rounded-sm border transition-colors duration-200 ease-in-out checked:border-green-200 checked:bg-green-200 hover:bg-purple-200 checked:hover:bg-green-100 checked:focus:bg-green-100",
          {
            "border-purple-100 hover:bg-purple-200 focus:bg-purple-200":
              checked === false,
          },
        )}
      />
      <Check
        size={12}
        strokeWidth={3}
        className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1 transform peer-checked:block"
      />
    </label>
  );
}
