import { Apple, MoreVertical } from "lucide-react";
import { Checkbox } from "./Checkbox";

export function ListItem() {
  return (
    <li className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-gray-400 p-4">
      <section className="flex items-center gap-5">
        <Checkbox isCompleted />

        <div>
          <h2 className="mb-[2px] text-sm font-bold leading-[130%] text-gray-100">
            Maça
          </h2>
          <p className="text-xs leading-[130%] text-gray-200">2 unidades</p>
        </div>
      </section>

      <section className="flex w-16 items-center gap-3">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-orange_dark">
          <Apple size={16} strokeWidth={3} className="text-orange" />
        </div>

        <MoreVertical size={20} strokeWidth={2} className="text-purple-100" />
      </section>
    </li>
  );
}
