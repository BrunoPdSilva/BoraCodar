"use client";

import { deleteItem } from "@/app/actions";
import { Trash2 } from "lucide-react";

export function DeleteItem({ id }: { id: string }) {
  return (
    <button type="button" onClick={() => deleteItem(id)}>
      <Trash2 size={18} strokeWidth={2} className="text-purple-100" />
    </button>
  );
}
