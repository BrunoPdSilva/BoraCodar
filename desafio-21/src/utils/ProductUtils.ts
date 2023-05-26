import { Dispatch, SetStateAction } from 'react';

type Setter = Dispatch<SetStateAction<number>>;

interface Params {
  setProductPrice: Setter;
  setTotal: Setter;
  setQuantity: Setter;
  price: number;
  quantity?: number;
}

export function getDescription(description: string) {
  if (description.length > 47) {
    return description.substring(0, 48) + '...';
  }
  return description;
}

export function addOne({ setProductPrice, setTotal, setQuantity, price }: Params) {
  setProductPrice(prevPrice => prevPrice + price);
  setTotal(prevTotal => prevTotal + price);
  setQuantity(prev => prev + 1);
}

export function subtractOne({
  setProductPrice,
  setTotal,
  setQuantity,
  price,
  quantity,
}: Params) {
  if (quantity && quantity > 1) {
    setProductPrice(prevPrice => prevPrice - price);
    setQuantity(prev => prev - 1);
    setTotal(prevTotal => prevTotal - price);
  } else {
    setProductPrice(price);
  }
}
