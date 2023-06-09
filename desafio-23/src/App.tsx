import { FormEvent, useState } from "react";
import { CaretRight } from "phosphor-react";
import { HeaderItem } from "./components/HeaderItem";
import { FormInputField } from "./components/FormInputField";
import { Button } from "./components/Button";
import { formFields } from "./utils/formFields";

export function App() {
  const [formPage, setFormPage] = useState(1);
  const [state, setState] = useState({});

  function decrease() {
    if (formPage >= 2) setFormPage(prev => prev - 1);
  }

  function increase() {
    if (formPage <= 2) setFormPage(prev => prev + 1);
  }
  function getFormFields() {
    return formFields[formPage - 1].map((field, index) => (
      <FormInputField
        key={index}
        label={field.label}
        placeholder={field.placeholder}
        formValues={state}
        setFormValues={setState}
      />
    ));
  }
  
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <main>
      <header>
        <HeaderItem number="1" text="Contato"  page={formPage} />
        <CaretRight size={20} color="#323238" weight="bold" />
        <HeaderItem number="2" text="Empresa"  page={formPage} />
        <CaretRight size={20} color="#323238" weight="bold" />
        <HeaderItem number="3" text="Projeto"  page={formPage} />
      </header>
      <form onSubmit={handleSubmit}>
        {getFormFields()}
        <div className="action-buttons">
          {formPage > 1 && <Button type="secondary" func={decrease} text="VOLTAR"/>}
          {formPage < 3 && <Button type="primary" func={increase} text="CONTINUAR"/>}
          {formPage === 3 && <Button type="primary" text="ENVIAR RESPOSTA"/>}
        </div>
      </form>
    </main>
  );
}
