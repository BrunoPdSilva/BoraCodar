"use server";

import { prisma } from "@/services/prismaClient";
import { revalidatePath } from "next/cache";

export async function addItem(data: FormData) {
  const item = data.get("item") as string;
  const quantity = data.get("quantity") as string;
  const quantityType = data.get("quantityType") as string;
  const category = data.get("category") as string;

  try {
    const res = await prisma.product.create({
      data: {
        name: item,
        quantity,
        quantityType,
        category,
      },
    });

    revalidatePath("/");

    console.log(`Item adicionado com sucesso: \n${res}`);
  } catch (err) {
    console.log(err);
  }
}

export async function toggleIsCompleted(checkboxValue: boolean, id: string) {
  const res = await prisma.product.update({
    where: { id },
    data: {
      isCompleted: checkboxValue,
    },
  });

  console.log(res);
  revalidatePath("/");
}

export async function deleteItem(id: string) {
  const res = await prisma.product.delete({ where: { id } });
  revalidatePath("/");
  console.log(res);
}
