import { contactList, lettersList, colors } from '../data/dataBase';

import { Contact } from './Contact';

import '../styles/ContactList.css';

export function ContactList() {
  return (
    <div className="ContactList">
      {lettersList.map(letter => (
        <section>
          <h2 className="letter" style={{ backgroundColor: colors[letter] }}>{letter}</h2>

          <ul>
            {contactList.map(contact => {
              if (contact.name[0] === letter) {
                return <Contact name={contact.name} number={contact.number} photo={contact.photo}/>
              }
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
