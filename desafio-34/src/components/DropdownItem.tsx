interface DropdownItemProps {
  icon?: JSX.Element;
  label: string;
}

export function DropdownItem({ icon: Icon, label }: DropdownItemProps) {
  return (
    <li>
      <button
        type="button"
        className="flex h-10 w-full cursor-pointer items-center gap-2 rounded-t-md border border-gray-300 bg-gray-400 p-3 text-sm tracking-wide text-gray-100 transition-colors duration-200 ease-in-out hover:bg-gray-300 focus:bg-gray-300"
      >
        {Icon}
        {label}
      </button>
    </li>
  );
}
