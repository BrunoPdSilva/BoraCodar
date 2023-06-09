import { Dispatch, SetStateAction } from "react";

interface Props {
  label: string;
  placeholder: string;
  formValues: Record<string, string>;
  setFormValues: Dispatch<SetStateAction<Record<string, string>>>;
}

const map: Record<string, string> = {
  Nome: "name",
  Telefone: "phone",
  "E-mail": "email",
  "Nome da empresa": "company",
  "Número de funcionários": "workers",
  "Sobre seu negócio": "about",
  "Objetivos do projeto": "objectives",
};

export function FormInputField({ label, placeholder, formValues, setFormValues }: Props) {
  const isTextArea = label === "Sobre seu negócio" || label === "Objetivos do projeto";

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const key = map[label];
    setFormValues(prevFormValues => ({ ...prevFormValues, [key]: e.target.value }));
  }

  return (
    <div className="formField">
      <label>{label}</label>
      {!isTextArea ? (
        <input
          type="text"
          placeholder={placeholder}
          autoComplete="none"
          onChange={handleChange}
          value={formValues[map[label]] || ""}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          onChange={handleChange}
          value={formValues[map[label]] || ""}
        />
      )}
    </div>
  );
}
