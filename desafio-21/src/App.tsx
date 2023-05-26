import { ShoppingCart } from 'phosphor-react';
import { CartContextP } from './context/CartContextP';
import { CartProducts } from './components/CartProducts';
import { CartHeader } from './components/CartHeader';
import { CartFooter } from './components/CartFooter';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showCart, setShowCart] = useState(true);

  const cartVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <main></main>

      <AnimatePresence>
        {showCart && (
          <motion.aside
            className="open"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={cartVariants}
            transition={{ duration: 0.3 }}
          >
            <CartHeader setShowCart={setShowCart} />
            <CartContextP>
              <CartProducts />
              <CartFooter />
            </CartContextP>
          </motion.aside>
        )}
      </AnimatePresence>

      {!showCart && (
        <button className="cart-icon" onClick={() => setShowCart(true)}>
          <ShoppingCart size={32} />
        </button>
      )}
    </>
  );
}

export default App;
