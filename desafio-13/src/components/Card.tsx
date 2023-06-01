import { CardData } from "../App";
import { ShieldCheck } from "../assets/ShieldCheck";

interface Data {
  cardData: CardData;
}

export function Card({ cardData }: Data) {
  function getSeparateNumbers(number: string) {
    const numbersArray = number.split(" ").map(n => {
      return n
        .split("")
        .map(x => x + " ")
        .join("");
    });

    return numbersArray;
  }

  const cardNumbers = getSeparateNumbers(cardData.number);

  return (
    <div className="card-container">
      <div className="card-wrapper">
        <div className="card">
          <div className="front">
            <ul>
              <li>{cardNumbers[0] || "* * * *"}</li>
              <li>{cardNumbers[1] || "* * * *"}</li>
              <li>{cardNumbers[2] || "* * * *"}</li>
              <li>{cardNumbers[3] || "* * * *"}</li>
            </ul>
            <div>
              <p className={cardData.name ? "filled" : ""}>
                {cardData.name || "Seu nome aqui"}
              </p>
              <p className={cardData.validity ? "filled" : ""}>
                {cardData.validity || "mm/aa"}
              </p>
            </div>
          </div>
          <div className="back">
            <p>{cardData.cvv || "***"}</p>
          </div>
        </div>
      </div>
      <h3 className="safety">
        <ShieldCheck />
        Seus dados estão seguros
      </h3>
    </div>
  );
}
