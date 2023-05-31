import { FormField } from "./components/FormField";
import { Card } from "./components/Card";

function App() {
  return (
    <main id="App">
      <section>
        <form>
          <FormField label="Número do cartão" placeholder="**** **** **** ****" />
          <FormField label="Nome do titular" placeholder="Nome como está no cartão" />
          <div>
            <FormField label="Validade" placeholder="mm/aa" />
            <FormField label="CVV" placeholder="***" />
          </div>
        </form>
        <div className="card-container">
         <Card />
        </div>
      </section>
      
      <button>Adicionar cartão</button>
    </main>
  );
}

export default App;
