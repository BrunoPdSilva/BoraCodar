"use server"

export async function printInfo(data: FormData) {
  const item = data.get("item");

  console.log(item);
}