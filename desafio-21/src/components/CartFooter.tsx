import { Tag } from 'phosphor-react';

export function CartFooter() {
  return (
    <footer>
      <div className="price">
        <div>
          <h3>Total: </h3>
          <h2>R$ 10.681,60</h2>
        </div>
        <button>
          <Tag size={24} />
          Adicionar cupom
        </button>
      </div>
      <button className="cta">Finalizar compra</button>
    </footer>
  );
}
