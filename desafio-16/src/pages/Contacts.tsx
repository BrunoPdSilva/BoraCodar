import { useState } from 'react';
import { IContact } from '../data/dataBase';

import { Header } from '../components/Header';
import { ContactList } from '../components/ContactList';
import { AddContactModal } from '../components/AddContactModal';

import '../styles/Contacts.css';

export function Contacts() {
  const [newContact, setNewContact] = useState<IContact | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('');

  return (
    <div id="Contacts">
      <Header setFilter={setFilter} setShowModal={setShowModal} />
      <ContactList filter={filter} newContact={newContact} />

      {showModal && <AddContactModal setShowModal={setShowModal} setNewContact={setNewContact} />}
    </div>
  );
}
