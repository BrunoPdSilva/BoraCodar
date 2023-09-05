import { Form } from "@/components/Form";
import { ListItem } from "@/components/ListItem";
import { prisma } from "@/services/prismaClient";

export default async function Home() {
  const items = await prisma.product.findMany();

  return (
    <main className="relative z-30 flex min-h-screen w-full min-w-[23.75rem] flex-col items-center px-6 pt-[5.5rem]">
      <h1 className="w-full text-2xl font-bold leading-[100%] tracking-wide text-gray-100">
        Lista de Compras
      </h1>

      <Form />

      <ul className="flex w-full flex-col gap-2">
        {items.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </ul>
    </main>
  );
}
