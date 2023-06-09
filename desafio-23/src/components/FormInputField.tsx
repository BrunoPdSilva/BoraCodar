interface Props {
  label: string;
  placeholder: string;
}

export function FormInputField({ label, placeholder }: Props) {
  return (
    <div className="formField">
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
