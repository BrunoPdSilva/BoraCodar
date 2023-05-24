import { Equals } from 'phosphor-react';
import { Buttons } from './components/Buttons';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState<string[]>([]);
  const [result, setResult] = useState(0);

  console.log(`Operation: ${values} = ${result}`);

  function addValue(value: string) {
    setValues(prevValues => {
      const lastValue = prevValues[prevValues.length - 1];
      if (lastValue && isOperator(lastValue) && isOperator(value)) {
        return [...prevValues.slice(0, -1), value];
      } else if (lastValue === '.' && value === ".") {
        return [...prevValues.slice(0, -1), value];
      } else {
        return [...prevValues, value];
      }
    });
  }
  
  function isOperator(value: string) {
    return ['+', '-', '*', '/'].includes(value);
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

  function percent() {
    setValues([String(result / 100)]);
    setResult(result / 100);
  }

  function negate() { 
    setValues([String(-result)])
    setResult(-result);
  }

  return (
    <main id="calculator">
      <header>
        <p>{values.join('')}</p>
        <div>
          <Equals size={20} color="#6B6B6B" />
          <h1>{result}</h1>
        </div>
      </header>

      <Buttons
        addValue={addValue}
        clearValues={clearValues}
        calculateResult={calculateResult}
        percent={percent}
        negate={negate}
      />
    </main>
  );
}

export default App;
