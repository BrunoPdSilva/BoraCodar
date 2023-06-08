import { CaretRight } from "phosphor-react";
import { HeaderItem } from "./components/HeaderItem";

function App() {
  return (
    <main>
      <header>
        <HeaderItem status="active" number="1" text="Contato" />
        <CaretRight size={20} color="#323238" />
        <HeaderItem number="2" text="Empresa" />
        <CaretRight size={20} color="#323238" />
        <HeaderItem number="3" text="Projeto" />
      </header>
    </main>
  );
}

export default App;
