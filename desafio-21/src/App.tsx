import {  } from 'phosphor-react';
import { CartHeader } from './components/CartHeader';
import { CartFooter } from './components/CartFooter';

function App() {
  return (
    <>
      <main></main>
      <aside>
        <CartHeader />

        <div className="products"></div>

        <CartFooter />
      </aside>
    </>
  );
}

export default App;
