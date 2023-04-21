import { useState } from 'react';

import { Header } from '../components/Header';
import { ContactList } from '../components/ContactList';
import { AddContact } from '../components/AddContact';

import '../styles/Contacts.css';

export function Contacts() {
  const [showModal, setShowModal] = useState(true);
  const [filter, setFilter] = useState('');

  return (
    <div id="Contacts">
      <Header setFilter={setFilter} setShowModal={setShowModal}/>
      <ContactList filter={filter} />

      {showModal && <AddContact setShowModal={setShowModal}/>}
    </div>
  );
}
