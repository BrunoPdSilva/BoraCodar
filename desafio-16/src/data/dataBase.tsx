import Foto0 from '../assets/Foto.png';
import Foto1 from '../assets/Foto-1.png';
import Foto2 from '../assets/Foto-2.png';
import Foto3 from '../assets/Foto-3.png';
import Foto4 from '../assets/Foto-4.png';
import Foto5 from '../assets/Foto-5.png';

interface Contact {
  name: string;
  number: string;
  photo: string;
}

export const contactList: Contact[] = [
  { name: 'Abraão Sena', number: '(11) 90876-1234', photo: Foto0 },
  { name: 'Beatriz Clasen', number: '(48) 90876-1123', photo: Foto1 },
  { name: 'Brenda Mendes', number: '(21) 90876-8765', photo: Foto2 },
  { name: 'Caio Vinícius', number: '(71) 90876-2435', photo: Foto3 },
  { name: 'Cleiton Souza', number: '(11) 90876-1209', photo: Foto4 },
  { name: 'Daniel Duarte', number: '(82) 90876-6534', photo: Foto5 },
];

function getInitialLetters(contacts: Contact[]) {
  const initials = contacts.map(contact => contact.name[0]);

  return [...new Set([...initials])];
}

export const lettersList = getInitialLetters(contactList);
