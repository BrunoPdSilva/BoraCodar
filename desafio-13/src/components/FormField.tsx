import { Question } from "../assets/Question";

interface FieldProps {
  label: string;
  placeholder: string;
}

export function FormField({ label, placeholder }: FieldProps) {
  return (
    <label>
      <p>
        {label}
        {label === "CVV" && <Question />}
      </p>
      <input type="text" placeholder={placeholder} />
    </label>
  );
}
