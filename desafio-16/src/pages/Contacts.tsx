import { useState } from 'react';

import { Header } from '../components/Header'
import { ContactList } from '../components/ContactList'

import '../styles/Contacts.css'

export function Contacts() {
  const [filter, setFilter] = useState('');

  return (
    <div id="Contacts">
      <Header setFilter={setFilter}/>
      <ContactList filter={filter} />      
    </div>
  )
}
