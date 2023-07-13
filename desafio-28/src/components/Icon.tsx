import { ElementType } from "react";

interface IconProps {
  icon: ElementType;
  size?: number;
  className?: string;
}

export function Icon({ icon: IconImage, className, size = 32 }: IconProps) {
  return (
    <div className={`p-4 border rounded-xl bg-gray-600 ${className}`}>
      <IconImage size={size} />
    </div>
  );
}
