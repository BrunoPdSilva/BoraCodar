import { MoreVertical } from "lucide-react";
import { Checkbox } from "./Checkbox";
import { icons } from "@/utils/dropdownOptions";

interface ListItemProps {
  id: string;
  name: string;
  quantity: string;
  quantityType: string;
  category: string;
  isCompleted: boolean;
}

export function ListItem(props: ListItemProps) {
  const measure: Record<string, string> = {
    "Un.": "unidades",
    L: "litros",
    Kg: "kilos",
  };

  function getIconColor(type: string) {
    const bgColor: Record<string, string> = {
      Padaria: "bg-yellow_dark",
      Legume: "bg-second_green_dark",
      Carne: "bg-pink_dark",
      Fruta: "bg-orange_dark",
      Bebida: "bg-blue_dark",
    };

    return bgColor[type];
  }

  return (
    <li className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-gray-400 p-4">
      <section className="flex items-center gap-5">
        <Checkbox isCompleted={props.isCompleted} id={props.id} />

        <div>
          <h2 className="mb-[2px] text-sm font-bold leading-[130%] text-gray-100">
            {props.name}
          </h2>
          <p className="text-xs leading-[130%] text-gray-200">
            {props.quantity} {measure[props.quantityType]}
          </p>
        </div>
      </section>

      <section className="flex w-16 items-center gap-3">
        <div
          className={`grid h-8 w-8 place-items-center rounded-full ${getIconColor(
            props.category,
          )}`}
        >
          {icons[props.category.toLowerCase()]}
        </div>

        <MoreVertical size={20} strokeWidth={2} className="text-purple-100" />
      </section>
    </li>
  );
}
