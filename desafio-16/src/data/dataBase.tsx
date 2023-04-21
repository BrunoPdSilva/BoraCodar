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

interface Colors {
  [key: string]: string;
}

export const contactList: Contact[] = [
  { name: 'Abraão Sena', number: '(11) 90876-1234', photo: Foto0 },
  { name: 'Beatriz Clasen', number: '(48) 90876-1123', photo: Foto1 },
  { name: 'Brenda Mendes', number: '(21) 90876-8765', photo: Foto2 },
  { name: 'Caio Vinícius', number: '(71) 90876-2435', photo: Foto3 },
  { name: 'Cleiton Souza', number: '(11) 90876-1209', photo: Foto4 },
  { name: 'Daniel Duarte', number: '(82) 90876-6534', photo: Foto5 },
];

export function getInitialLetters(contacts: Contact[]) {
  const initials = contacts.map(contact => contact.name[0].toUpperCase());

  return [...new Set([...initials])];
}

export const colors: Colors = {
  A: '#633BBC',
  B: '#07847E',
  C: '#9A00B3',
  D: '#0088B3',
  E: '#D81B60',
  F: '#388E3C',
  G: '#F57C00',
  H: '#283593',
  I: '#E65100',
  J: '#4A148C',
  K: '#0097A7',
  L: '#FBC02D',
  M: '#7B1FA2',
  N: '#424242',
  O: '#C62828',
  P: '#455A64',
  Q: '#AFB42B',
  R: '#EF9A9A',
  S: '#FF9800',
  T: '#757575',
  U: '#9E9E9E',
  V: '#D32F2F',
  W: '#8E24AA',
  X: '#1565C0',
  Y: '#FF6F00',
  Z: '#1A237E',
};
