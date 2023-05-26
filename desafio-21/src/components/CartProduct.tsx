import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';

interface Props {
  image: string;
  description: string;
  price: number;
}

export function CartProduct({ image, description, price }: Props) {
  const [productPrice, setProductPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);

  function addOne() {
    setProductPrice(prevPrice => prevPrice + price);
    setQuantity(prev => prev + 1);
  }

  function subtractOne() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
      setProductPrice(prevPrice => prevPrice - price);
    } else {
      setProductPrice(price);
    }
  }

  function getDescription(description: string) {
    if (description.length > 47) {
      return description.substring(0, 48) + '...';
    }
    return description;
  }

  return (
    <li className="product">
      <img src={image} alt="Product Image" />

      <div className="details">
        <p>{getDescription(description)}</p>

        <div className="price">
          <NumericFormat
            value={productPrice}
            displayType="text"
            prefix="R$ "
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale={true}
            className="priceValue"
          />

          <div className="quantity">
            <button className="minus" onClick={subtractOne}>
              <Minus size={16} weight="bold" />
            </button>
            <span>{quantity}</span>
            <button className="plus" onClick={addOne}>
              <Plus size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
