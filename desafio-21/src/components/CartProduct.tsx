import { Minus, Plus } from 'phosphor-react';

interface Props {
  image: string;
  description: string;
  price: number;
}

export function CartProduct({ image, description, price }: Props) {
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
          <span>R$ {price}</span>

          <div className="quantity">
            <button className="minus">
              <Minus size={16} weight="bold" />
            </button>
            <span>1</span>
            <button className="plus">
              <Plus size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
