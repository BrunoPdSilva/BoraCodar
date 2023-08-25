import { Form } from "@/components/Form";
import { ListItem } from "@/components/ListItem";

export default function Home() {
  return (
    <main className="relative z-30 flex min-h-screen w-full min-w-[23.75rem] flex-col items-center px-6 pt-[5.5rem]">
      <h1 className="w-full text-2xl font-bold leading-[100%] tracking-wide text-gray-100">
        Lista de Compras
      </h1>

      <Form />

      <ul className="flex w-full flex-col gap-2">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </main>
  );
}
