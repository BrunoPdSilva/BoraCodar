import { Equals } from 'phosphor-react';
import { Buttons } from './components/Buttons';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState<(string | string[])[]>([[]]);
  const [result, setResult] = useState<number>(0);

  function addValue(value: string) {
    const lastValue = values[values.length - 1];

    if (values.length === 0 || (isOperator(lastValue) && isOperator(value))) {
      return;
    }

    if (values.length === 0) {
      setValues([[value]]);
      return;
    }

    if (isOperator(lastValue)) {
      setValues(prev => [...prev, [value]]);
      return;
    }

    if (isOperator(value)) {
      setValues(prev => [...prev, value]);
      return;
    }

    if (value === '.' && Array.isArray(lastValue) && lastValue.includes('.')) {
      return;
    }

    const initialA = values.slice(0, values.length - 1);
    const lastA = values.slice(values.length - 1);
    lastA[0] = [...lastA[0], value];

    setValues([...initialA, ...lastA]);
  }

  function getEvalStr(array: (string | string[])[]) {
    return array.flat().join('');
  }

  function isOperator(value: string | string[]) {
    if (Array.isArray(value)) {
      return value.every(item => ['+', '-', '*', '/'].includes(item));
    }

    return ['+', '-', '*', '/'].includes(value);
  }

  function clearValues() {
    setValues([[]]);
    setResult(0);
  }

  function calculateResult() {
    const expression = getEvalStr(values);
    const calculatedResult = eval(expression);
    setResult(calculatedResult);
  }

  function percent() {
    setValues([String(result / 100)]);
    setResult(result / 100);
  }

  function negate() {
    setValues([String(-result)]);
    setResult(-result);
  }

  return (
    <main id="calculator">
      <header>
        <p>{getEvalStr(values)}</p>
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
