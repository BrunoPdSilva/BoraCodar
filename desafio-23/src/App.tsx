import { useState } from "react";
import { CaretRight } from "phosphor-react";
import { HeaderItem } from "./components/HeaderItem";
import { FormInputField } from "./components/FormInputField";
import { Button } from "./components/Button";

interface FieldMap {
  [key: string]: JSX.Element;
}

export function App() {
  const [formPage, setFormPage] = useState(1);

  function decrease() {
    if (formPage >= 2) setFormPage(prev => prev - 1);
  }

  function increase() {
    if (formPage <= 2) setFormPage(prev => prev + 1);
  }

  function getFormFields() {
    const fields: FieldMap = {
      "1": (
        <>
          <FormInputField label="Nome" placeholder="Como prefere ser chamado" />
          <FormInputField label="Telefone" placeholder="Digite seu número de WhatsApp" />
          <FormInputField label="E-mail" placeholder="Digite seu e-mail" />
        </>
      ),
      "2": (
        <>
          <FormInputField label="Nome da empresa" placeholder="Qual é o nome da empresa" />
          <FormInputField label="Número de funcionários" placeholder="Digite o número de colaboradores" />
          <FormInputField label="Sobre seu negócio" placeholder="Fale um pouco sobre seus produtos ou serviços" />
        </>
      ),
      "3": (
        <>
          <FormInputField label="Objetivos do projeto" placeholder="Descreva quais os objetivos desse projeto" />
        </>
      )
    }
    return fields[String(formPage)]
  }

  return (
    <main>
      <header>
        <HeaderItem number="1" text="Contato"  page={formPage} />
        <CaretRight size={20}  color="#323238" weight="bold" />
        <HeaderItem number="2" text="Empresa"  page={formPage} />
        <CaretRight size={20}  color="#323238" weight="bold" />
        <HeaderItem number="3" text="Projeto"  page={formPage} />
      </header>
      <form>
        {getFormFields()}
        <div className="action-buttons">
          {formPage > 1   && <Button type="secondary" func={decrease} text="VOLTAR"/>}
          {formPage < 3   && <Button type="primary" func={increase} text="CONTINUAR"/>}
          {formPage === 3 && <Button type="primary" text="ENVIAR RESPOSTA"/>}
        </div>
      </form>
    </main>
  );
}
