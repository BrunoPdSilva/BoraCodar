import { ReactNode } from "react";

interface DropdownOptionsProps {
  children: ReactNode;
}

export function DropdownOptions({ children }: DropdownOptionsProps) {
  return (
    <ul className="overflow-hidden dropdown-options hidden absolute z-50 top-11 w-full bg-gray-400 border border-gray-300 rounded-md">
      {children}
    </ul>
  );
}
