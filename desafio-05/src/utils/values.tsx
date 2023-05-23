import { Equals, Percent, Divide, X, Minus, Plus, PlusMinus } from 'phosphor-react';

export const calcValues = [
  { value: 'CE', action: "clear" },
  { value: 'C',  action: "clear" },
  { value: <Percent />, action: "percent" },
  { value: <Divide />, operation: "divide" },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: <X />, operation: "multiply" },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: <Minus />, operation: "minus" },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: <Plus />, operation: "plus" },
  { value: <PlusMinus />, action: "negate" },
  { value: 0 },
  { value: ',', action: "," },
  { value: <Equals />, operation: "equal"}
]