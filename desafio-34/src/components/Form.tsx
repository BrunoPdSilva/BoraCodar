import { ItemInput } from "./ItemInput";
import { printInfo } from "../app/actions";
import { Plus } from "lucide-react";
import { categoryOptions, quantityOptions } from "@/utils/dropdownOptions";
import { Dropdown } from "./Dropdown";

export function Form() {
  return (
    <form action={printInfo} className="mb-10 mt-6 flex w-full flex-col gap-3">
      <ItemInput />

      <div className="flex items-end gap-3">
        <div className="w-[150px]">
          <Dropdown.Root>
            <Dropdown.Label label="Quantidade" id="quantityDropdown" />
            <div className="relative flex items-center">
              <input
                type="number"
                className="h-10 w-20 rounded-s-md border border-gray-300 bg-gray-500 p-3 text-sm leading-none tracking-wide text-gray-100 outline-none"
                defaultValue={1}
                min={0}
                name="quantity"
              />
              <Dropdown.Trigger id="quantityDropdown" holder="UN." />
              <Dropdown.Options>
                {quantityOptions.map((option, i) => (
                  <Dropdown.Option key={i} value={option} name="quantityType" />
                ))}
              </Dropdown.Options>
            </div>
          </Dropdown.Root>
        </div>

        <Dropdown.Root>
          <Dropdown.Label label="Categoria" id="category" />
          <div className="relative">
            <Dropdown.Trigger id="category" fullRounded />
            <Dropdown.Options>
              {categoryOptions.map(({ label, icon }, i) => (
                <Dropdown.Option key={i} value={label} icon={icon} name="category" />
              ))}
            </Dropdown.Options>
          </div>
        </Dropdown.Root>

        <button
          type="submit"
          className="grid h-10 w-10 place-items-center rounded-full bg-purple-200 text-gray-100 transition-colors duration-200 ease-in-out hover:bg-purple-300 focus:bg-purple-300"
        >
          <Plus size={24} />
        </button>
      </div>
    </form>
  );
}
