import { ShieldCheck } from "./assets/ShieldCheck";
import { FormField } from "./components/FormField"

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
          <div className="card"></div>

          <h3 className="safety">
            <ShieldCheck />
            Seus dados estão seguros
          </h3>
        </div>
      </section>
      <button>Adicionar cartão</button>
    </main>
  );
}

export default App
