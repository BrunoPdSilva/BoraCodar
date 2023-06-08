import { CaretRight } from "phosphor-react";
import { HeaderItem } from "./components/HeaderItem";
import { FormInputField } from "./components/FormInputField";

function App() {
  return (
    <main>
      <header>
        <HeaderItem status="active" number="1" text="Contato" />
        <CaretRight size={20} color="#323238" weight="bold" />
        <HeaderItem number="2" text="Empresa" />
        <CaretRight size={20} color="#323238" weight="bold" />
        <HeaderItem number="3" text="Projeto" />
      </header>
      <form>
        <FormInputField label="Nome" placeholder="Como prefere ser chamado" />
        <FormInputField label="Telefone" placeholder="Digite seu número de WhatsApp" />
        <FormInputField label="E-mail" placeholder="Digite seu e-mail" />

        <div className="action-buttons">
          <button className="secondary">VOLTAR</button>
          <button className="primary">CONTINUAR</button>
        </div>
      </form>
    </main>
  );
}

export default App;
