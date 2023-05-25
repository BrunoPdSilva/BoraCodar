import { Tag, X } from 'phosphor-react';
import { useState } from 'react';

export function CartFooter() {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [cupom, setCupom] = useState('');

  const handleFocus = () => {
    setShowPlaceholder(false);
  };

  const handleBlur = () => {
    setShowPlaceholder(true);
  };

  const handleLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <footer>
      <div className="price">
        <div>
          <h3>Total: </h3>
          <h2>R$ 10.681,60</h2>
        </div>
        <label>
          <Tag size={24} />
          <input
            type="text"
            placeholder={showPlaceholder ? 'Adicionar cupom' : ''}
            onChange={e => setCupom(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={cupom}
          />

          <X
            size={24}
            color="var(--close-button-color)"
            className="clearInput"
            style={{ display: cupom ? 'block' : 'none' }}
            onClick={() => setCupom('')}
          />
        </label>
      </div>
      <button className="cta" onClick={handleLoading}>
        {!isLoading ? 'Finalizar compra' : <div className="loading"></div>}
      </button>
    </footer>
  );
}
