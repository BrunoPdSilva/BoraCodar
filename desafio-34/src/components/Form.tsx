import { ItemInput } from "./ItemInput";
import { printInfo } from "../app/actions";
import { QuantityInput } from "./QuantityInput";
import { Plus } from "lucide-react";
import { CategoryInput } from "./CategoryInput";

export function Form() {
  return (
    <form action={printInfo} className="mb-10 mt-6 flex w-full flex-col gap-3">
      <ItemInput />

      <div className="flex items-end gap-3">
        <QuantityInput />
        <CategoryInput />
        <button
          type="submit"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200 text-gray-100 transition-colors duration-200 ease-in-out hover:bg-purple-300 focus:bg-purple-300"
        >
          <Plus size={24} />
        </button>
      </div>
    </form>
  );
}
