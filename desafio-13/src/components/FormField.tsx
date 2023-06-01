import { Dispatch, SetStateAction } from "react";
import { Question } from "../assets/Question";
import { CardData } from "../App";
import InputMask from "react-input-mask";

interface FieldProps {
  label: string;
  placeholder: string;
  setState: Dispatch<SetStateAction<CardData>>;
}

export function FormField({ label, placeholder, setState }: FieldProps) {
  function getInputType(type: string) {
    switch (type) {
      case "Número do cartão":
        return (
          <InputMask
            mask="9999 9999 9999 9999"
            maskPlaceholder="*"
            placeholder="**** **** **** ****"
            onChange={e => setState(prev => ({ ...prev, number: e.target.value }))}
          />
        );
      case "CVV":
        return (
          <InputMask
            mask="999"
            maskPlaceholder="*"
            placeholder="***"
            onChange={e => setState(prev => ({ ...prev, cvv: e.target.value }))}
          />
        );
      case "Validade":
        return (
          <InputMask
            mask="99/99"
            maskPlaceholder={null}
            placeholder="mm/aa"
            onChange={e => setState(prev => ({ ...prev, validity: e.target.value }))}
          />
        );
      default:
        return (
          <input
            type="text"
            placeholder={placeholder}
            onChange={e => setState(prev => ({ ...prev, name: e.target.value }))}
          />
        );
    }
  }

  return (
    <label>
      <p>
        {label}
        {label === "CVV" && <Question />}
      </p>
      {getInputType(label)}
    </label>
  );
}
