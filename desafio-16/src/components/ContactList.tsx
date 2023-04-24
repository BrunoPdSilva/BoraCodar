import { contactList, getInitials, IContact } from '../data/dataBase';
import { colors } from '../utils/colorsFromLetters';
import { useEffect, useState } from 'react';

import { Contact } from './Contact';

import '../styles/ContactList.css';

interface Props {
  filter: string;
  newContact: IContact | null;
}

export function ContactList({ filter, newContact }: Props) {
  const [contacts, setContacts] = useState<IContact[]>(contactList);

  function getContacts(contactList: IContact[]){
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
    )
  }

  useEffect(() => {
    setContacts(getContacts(contactList));
  }, [contactList, filter]);

  useEffect(() => {
    if (newContact !== null) {
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  }, [newContact])

  const lettersList = getInitials(contacts);

  return (
    <div className="ContactList">
      {lettersList.map(letter => (
        <section key={letter}>
          <h2 className="letter" style={{ backgroundColor: colors[letter] }}>
            {letter}
          </h2>

          <ul>
            {contacts.map(contact => {
              if (contact.name[0].toUpperCase() === letter) {
                return (
                  <Contact
                    key={contact.number}
                    name={contact.name}
                    number={contact.number}
                    photo={contact.photo}
                  />
                );
              }
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
