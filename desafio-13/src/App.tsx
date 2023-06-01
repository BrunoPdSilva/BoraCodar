import { FormField } from "./components/FormField";
import { Card } from "./components/Card";
import { useState } from "react";

export interface CardData {
  number: string;
  name: string;
  validity: string;
  cvv: string;
}

const initialState = { number: "", name: "", validity: "", cvv: "" };

function App() {
  const [cardData, setCardData] = useState<CardData>(initialState);

  return (
    <main id="App">
      <section>
        <form>
          <FormField
            label="Número do cartão"
            placeholder="**** **** **** ****"
            setState={setCardData}
          />
          <FormField
            label="Nome do titular"
            placeholder="Nome como está no cartão"
            setState={setCardData}
          />
          <div>
            <FormField label="Validade" placeholder="mm/aa" setState={setCardData} />
            <FormField label="CVV" placeholder="***" setState={setCardData} />
          </div>
        </form>

        <Card cardData={cardData} />
      </section>

      <button>Adicionar cartão</button>
    </main>
  );
}

export default App;
