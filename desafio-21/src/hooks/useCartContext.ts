import { CartContext } from '../context/CartContextP';
import { useContext } from 'react';

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider');
  }

  return context;
};
