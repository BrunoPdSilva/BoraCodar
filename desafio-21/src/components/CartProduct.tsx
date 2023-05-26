import { useState } from 'react';
import { IProducts } from '../data/productsData';
import { NumericFormat } from 'react-number-format';
import { useCartContext } from '../hooks/useCartContext';
import { addOne, getDescription, subtractOne } from '../utils/ProductUtils';
import { Minus, Plus } from 'phosphor-react';

export function CartProduct({ image, description, price }: IProducts) {
  const [productPrice, setProductPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const { setTotal } = useCartContext();

  const params = { setProductPrice, setTotal, setQuantity, price };

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
            <button
              className="minus"
              onClick={() => subtractOne({ ...params, quantity })}
            >
              <Minus size={16} weight="bold" />
            </button>
            <span>{quantity}</span>
            <button className="plus" onClick={() => addOne(params)}>
              <Plus size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
