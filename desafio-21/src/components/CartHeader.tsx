import { Dispatch, SetStateAction } from 'react';
import { X } from 'phosphor-react';
import { productsData } from '../data/productsData';

interface Props {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

export function CartHeader({ setShowCart }: Props) {
  return (
    <header>
      <h3>
        Seu carrinho tem <b>{productsData.length} itens</b>
      </h3>
      <button onClick={() => setShowCart(false)}>
        <X size={24} />
      </button>
    </header>
  );
}
