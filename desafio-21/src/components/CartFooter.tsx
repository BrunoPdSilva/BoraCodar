import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useCartContext } from '../hooks/useCartContext';
import { handleFocus, handleLoading } from '../utils/footerUtils';
import { Tag, X } from 'phosphor-react';

export function CartFooter() {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [cupom, setCupom] = useState('');
  
  const { total } = useCartContext();

  return (
    <footer>
      <div className="price">
        <div>
          <h3>Total: </h3>
          <h2>
            <NumericFormat
              value={total}
              displayType="text"
              prefix="R$ "
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale={true}
              className="priceValue"
            />
          </h2>
        </div>
        <label>
          <Tag size={24} />
          <input
            type="text"
            placeholder={showPlaceholder ? 'Adicionar cupom' : ''}
            onChange={e => setCupom(e.target.value)}
            onFocus={() => handleFocus(setShowPlaceholder, false)}
            onBlur={() => handleFocus(setShowPlaceholder, true)}
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
      <button className="cta" onClick={() => handleLoading(setIsLoading)}>
        {!isLoading ? 'Finalizar compra' : <div className="loading"></div>}
      </button>
    </footer>
  );
}
