export function ItemInput() {
  return (
    <label htmlFor="item" className="group flex flex-col gap-2">
      <p className="text-xs leading-[100%] text-gray-200 transition-colors duration-300 ease-in-out group-focus-within:text-purple-100">
        Item
      </p>
      <input
        type="text"
        name="item"
        id="item"
        className="h-10 w-full rounded-md border border-gray-300 bg-gray-500 p-3 text-sm text-gray-100 outline-none transition-colors duration-300 ease-in-out focus:border-purple-100"
        required
      />
    </label>
  );
}
