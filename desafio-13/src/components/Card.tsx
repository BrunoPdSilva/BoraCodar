import { ShieldCheck } from "../assets/ShieldCheck";

export function Card() {
  return (
    <>
      <div className="card-wrapper">
        <div className="card">

          <div className="front">
            <h3>4 7 1 6 8 0 3 9 0 2 * * * * * *</h3>
            <div>
              <p>Seu nome aqui</p>
              <p>**/**</p>
            </div>
          </div>

          <div className="back">
            <p>4 7 1</p>
          </div>
        </div>
        
      </div>

      <h3 className="safety">
        <ShieldCheck />
        Seus dados estão seguros
      </h3>
    </>
  );
}
