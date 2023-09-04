interface DropdownLabelProps {
  label: string;
  id: string;
}

export function DropdownLabel({ label, id }: DropdownLabelProps) {
  return (
    <label
      htmlFor={id}
      className="text-gray-100 text-xs leading-[100%] tracking-wide checked:text-purple-100"
    >
      {label}
    </label>
  );
}
