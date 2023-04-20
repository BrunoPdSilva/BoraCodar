import { contactList, lettersList } from '../data/dataBase';

import Foto1 from '../assets/Foto-1.png';
import Foto2 from '../assets/Foto-2.png';
import Foto3 from '../assets/Foto-3.png';
import Foto4 from '../assets/Foto-4.png';
import Foto5 from '../assets/Foto-5.png';

import '../styles/ContactList.css';
import { Contact } from './Contact';

const abrao = contactList[0];

export function ContactList() {
  return (
    <div className="ContactList">
      <section>
        <h2 className="letter" style={{ backgroundColor: '#633BBC' }}>
          A
        </h2>

        <ul>
          <Contact name={abrao.name} number={abrao.number} photo={abrao.photo} />
        </ul>
      </section>
      <section>
        <h2 className="letter" style={{ backgroundColor: '#07847E' }}>
          B
        </h2>

        <ul>
          <li>
            <img src={Foto1} alt="User picture" />

            <div className="contactInfo">
              <h2>Beatriz Clasen</h2>
              <p>(48) 90876-1123</p>
            </div>
          </li>
          <li>
            <img src={Foto2} alt="User picture" />

            <div className="contactInfo">
              <h2>Brenda Mendes</h2>
              <p>(21) 90876-8765</p>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="letter" style={{ backgroundColor: '#9A00B3' }}>
          C
        </h2>

        <ul>
          <li>
            <img src={Foto3} alt="User picture" />

            <div className="contactInfo">
              <h2>Caio Vinícius</h2>
              <p>(71) 90876-2435</p>
            </div>
          </li>
          <li>
            <img src={Foto4} alt="User picture" />

            <div className="contactInfo">
              <h2>Cleiton Souza</h2>
              <p>(11) 90876-1209</p>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="letter" style={{ backgroundColor: '#0088B3' }}>
          D
        </h2>

        <ul>
          <li>
            <img src={Foto5} alt="User picture" />

            <div className="contactInfo">
              <h2>Daniel Duarte</h2>
              <p>(82) 90876-6534</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
