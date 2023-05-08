import { data } from './data/charactersData';
import { useState } from 'react';
import { CharacterInfo } from './components/CharacterInfo';

import { CarretL, CarretR } from './assets/Carrets';

import './Sass/app.scss';

export function App() {
  const [activeCard, setActiveCard] = useState('Rey');
  const { rey, finn, bb8 } = data;

  function handleLeftClick() {
    if (activeCard === 'Finn') setActiveCard('BB8');
    if (activeCard === 'Rey') setActiveCard('Finn');
    if (activeCard === 'BB8') setActiveCard('Rey');
  }
  
  function handleRightClick() {
    if (activeCard === 'Finn') setActiveCard('Rey');
    if (activeCard === 'Rey')  setActiveCard('BB8');
    if (activeCard === 'BB8')  setActiveCard('Finn');
  }

  return (
    <main>
      <button onClick={handleLeftClick}>{CarretL}</button>

      <section className={`Card Finn ${activeCard === "Finn" ? 'active' : ''}`} onClick={() => setActiveCard("Finn")} >
        {activeCard === "Finn" ? <CharacterInfo character={finn} /> : <span>{finn.name}</span>}
      </section>

      <section className={`Card Rey ${activeCard === "Rey" ? 'active' : ''}`} onClick={() => setActiveCard("Rey")}>
        {activeCard === "Rey" ? <CharacterInfo character={rey} /> : <span>{rey.name}</span>}
      </section>

      <section className={`Card BB8 ${activeCard === "BB8" ? 'active' : ''}`} onClick={() => setActiveCard("BB8")}>
        {activeCard === "BB8" ? <CharacterInfo character={bb8} /> : <span>{bb8.name}</span>}
      </section>

      <button onClick={handleRightClick}>{CarretR}</button>
    </main>
  );
}
