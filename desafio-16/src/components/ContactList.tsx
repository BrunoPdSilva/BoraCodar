import { contactList, getInitialLetters, colors } from '../data/dataBase';

import { Contact } from './Contact';

import '../styles/ContactList.css';

interface Props {
  filter: string;
}

export function ContactList({ filter }: Props) {
  const contacts = contactList.filter(contact => contact.name.includes(filter) || contact.number.includes(filter));

  const lettersList = getInitialLetters(contacts);

  return (
    <div className="ContactList">
      {lettersList.map(letter => (
        <section key={letter}>
          <h2 className="letter" style={{ backgroundColor: colors[letter] }}>{letter}</h2>

          <ul>
            {contacts.map(contact => {
              if (contact.name[0] === letter) {
                return <Contact key={contact.number} name={contact.name} number={contact.number} photo={contact.photo}/>
              }
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
