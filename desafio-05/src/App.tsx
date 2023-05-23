import { Equals } from 'phosphor-react';
import { Buttons } from './components/Buttons';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState([]);

  return (
    <main id="calculator">
      <header>
        <p>1 + 1</p>
        <div>
          <Equals size={20} color="#6B6B6B" />
          <h1>12345678910111</h1> {/* Limite de 14 */}
        </div>
      </header>

      {/* <Buttons setValues={setValues}/> */}
    </main>
  );
}

export default App;
