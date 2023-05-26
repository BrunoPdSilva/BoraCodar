import { CartProduct } from './CartProduct';

import { products } from '../data/productsData';

export function CartProducts() {
  return (
    <ul className="products">
      {products.map(({ image, description, price }) => (
        <CartProduct key={image} image={image} description={description} price={price} />
      ))}
    </ul>
  );
}
