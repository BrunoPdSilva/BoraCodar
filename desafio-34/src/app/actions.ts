"use server"

export async function printInfo(data: FormData) {
  const item = data.get("item");
  const category = data.get("category");
  const quantity = data.get("quantity");
  const quantityType = data.get("quantityType");

  console.log(item, category, quantity, quantityType);

}