import { Dispatch, SetStateAction, createContext, useState } from "react";
import { IProducts, productsData } from "../data/productsData";

interface Context {
  productsData: IProducts[];
  total: number;
  setTotal: Dispatch<SetStateAction<number>>
}

function getTotal(products: IProducts[]) {
  return products.reduce((acc, product) => acc + product.price, 0);
}

export const CartContext = createContext<Context | null>(null)

export function CartContextP({ children } : { children: React.ReactNode }) {
  const [total, setTotal] = useState(getTotal(productsData));

  return (
    <CartContext.Provider value={{ productsData, total, setTotal }}>
      {children}
    </CartContext.Provider>
  )
}
