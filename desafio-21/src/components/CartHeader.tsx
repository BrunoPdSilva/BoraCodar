import { X } from 'phosphor-react';
import { productsData } from '../data/productsData';

export function CartHeader() {
  return (
    <header>
      <h3>
        Seu carrinho tem <b>{productsData.length} itens</b>
      </h3>
      <button>
        <X size={24} />
      </button>
    </header>
  );
}
