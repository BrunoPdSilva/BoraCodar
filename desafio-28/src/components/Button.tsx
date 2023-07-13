import { ArrowRight } from "phosphor-react";
import { ElementType } from "react";
import { Icon } from "./Icon";

interface ButtonProps {
  icon: ElementType;
  label: string;
}

export function Button({ icon, label }: ButtonProps) {
  return (
    <button className="group p-4 rounded-xl bg-gray-600 hover:bg-gray-700 transition-colors ease-in-out duration-300 border border-gray-400 flex justify-between items-center">
      <div className="flex items-center gap-6 text-gray-200 font-semibold text-lg">
        <Icon icon={icon} className="border-gray-500 text-gray-300" />
        {label}
      </div>

      <Icon icon={ArrowRight} className="border-none text-gray-300 group-hover:bg-gray-700 transition-all ease-in-out duration-300 group-hover:translate-x-1" />
    </button>
  );
}
