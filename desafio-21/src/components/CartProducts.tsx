import { useCartContext } from '../hooks/useCartContext';
import { CartProduct } from './CartProduct';

export function CartProducts() {
  const { productsData } = useCartContext();

  return (
    <ul className="products">
      {productsData.map(({ image, description, price }) => (
        <CartProduct
          key={image}
          image={image}
          description={description}
          price={price}
        />
      ))}
    </ul>
  );
}
