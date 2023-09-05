import { Apple, Beef, Carrot, Milk, Sandwich } from "lucide-react";

type TCategoryOptions = {
  label: string;
  icon: JSX.Element;
};

export const icons: Record<string, JSX.Element> = {
  padaria: <Sandwich size={16} color="#BB9F3A" />,
  legume: <Carrot size={16} color="#8CAD51" />,
  carne: <Beef size={16} color="#DB5BBF" />,
  fruta: <Apple size={16} color="#E07B67" />,
  bebida: <Milk size={16} color="#7B94CB" />,
}

export const categoryOptions: TCategoryOptions[] = [
  { label: "Padaria", icon: icons.padaria },
  { label: "Legume", icon: icons.legume },
  { label: "Carne", icon: icons.carne },
  { label: "Fruta", icon: icons.fruta },
  { label: "Bebida", icon: icons.bebida },
];

export const quantityOptions = ["Un.", "L", "Kg"];
