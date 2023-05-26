import { CartContextP } from './context/CartContextP';
import { CartProducts } from './components/CartProducts';
import { CartHeader } from './components/CartHeader';
import { CartFooter } from './components/CartFooter';

function App() {
  return (
    <>
      <main></main>
      <aside>
        <CartHeader />
        <CartContextP>
          <CartProducts />
          <CartFooter />
        </CartContextP>
      </aside>
    </>
  );
}

export default App;
