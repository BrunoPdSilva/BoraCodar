import { ListItem } from "@/components/ListItem";

export default function Home() {
  return (
    <main className="relative z-30 flex min-h-screen w-full min-w-[23.75rem] flex-col items-center px-6 pt-[5.5rem]">
      <h1 className="w-full text-2xl font-bold leading-[100%] tracking-wide text-gray-100">
        Lista de Compras
      </h1>

      <form action="" className="mb-10 mt-6 flex w-full flex-col gap-3">
        <label htmlFor="item" className="group flex flex-col gap-2">
          <p className="text-xs leading-[100%] text-gray-200 transition-colors duration-300 ease-in-out group-focus-within:text-purple-100">
            Item
          </p>
          <input
            type="text"
            name="item"
            id="item"
            className="h-10 w-full rounded-md border border-gray-300 bg-gray-500 p-3 text-sm text-gray-100 outline-none transition-colors duration-300 ease-in-out focus:border-purple-100"
          />
        </label>

        <div className="flex items-center gap-3"></div>
      </form>

      <ul className="w-full flex flex-col gap-2">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </main>
  );
}
