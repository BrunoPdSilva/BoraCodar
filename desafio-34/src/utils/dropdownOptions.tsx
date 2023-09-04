import { Apple, Beef, Carrot, Milk, Sandwich } from "lucide-react";

type TCategoryOptions = {
  label: string;
  icon: JSX.Element;
};



export const icons = {
  sandwich: <Sandwich size={16} color="#BB9F3A" />,
  carrot: <Carrot size={16} color="#8CAD51" />,
  beef: <Beef size={16} color="#DB5BBF" />,
  apple: <Apple size={16} color="#E07B67" />,
  milk: <Milk size={16} color="#7B94CB" />,
}

export const categoryOptions: TCategoryOptions[] = [
  { label: "Padaria", icon: icons.sandwich },
  { label: "Legume", icon: icons.carrot },
  { label: "Carne", icon: icons.beef },
  { label: "Fruta", icon: icons.apple },
  { label: "Bebida", icon: icons.milk },
];

export const quantityOptions = ["Un.", "L", "Kg"];
