import { X } from 'phosphor-react';

export function CartHeader() {
  return (
    <header>
      <h3>
        Seu carrinho tem <b>5 itens</b>
      </h3>
      <button>
        <X size={24} />
      </button>
    </header>
  );
}
