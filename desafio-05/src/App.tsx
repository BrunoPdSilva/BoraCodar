import { Equals } from 'phosphor-react';
import { Buttons } from './components/Buttons';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState<string[]>([]);
  const [result, setResult] = useState(0);

  function addValue(value: string) {
    setValues(prevValues => [...prevValues, value]);
  }

  function clearValues() {
    setValues([]);
    setResult(0);
  }

  function calculateResult() {
    const expression = values.join('');
    const calculatedResult = eval(expression);
    setResult(calculatedResult);
  }

  return (
    <main id="calculator">
      <header>
        <p>{values.join('')}</p>
        <div>
          <Equals size={20} color="#6B6B6B" />
          <h1>{result.toString().substring(0,11)}</h1> 
        </div>
      </header>

      <Buttons
        addValue={addValue}
        clearValues={clearValues}
        calculateResult={calculateResult}
      />
    </main>
  );
}

export default App;
