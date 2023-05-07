import { data } from './data/charactersData';
import { useState } from 'react';
import { CharacterInfo } from './components/CharacterInfo';

import './Sass/app.scss';

export function App() {
  const [state, setState] = useState({ finn: false, rey: true, bb8: false });

  const { rey, finn, bb8 } = data;

  return (
    <main>
      <section className={`Card Finn ${state.finn ? 'active' : ''}`} onClick={() => setState({ finn: true, rey: false, bb8: false })} >
        {state.finn ? <CharacterInfo character={finn} /> : <span>{finn.name}</span>}
      </section>

      <section className={`Card Rey ${state.rey ? 'active' : ''}`} onClick={() => setState({ finn: false, rey: true, bb8: false })}>
        {state.rey ? <CharacterInfo character={rey} /> : <span>{rey.name}</span>}
      </section>

      <section className={`Card BB8 ${state.bb8 ? 'active' : ''}`} onClick={() => setState({ finn: false, rey: false, bb8: true })}>
        {state.bb8 ? <CharacterInfo character={bb8} /> : <span>{bb8.name}</span>}
      </section>
    </main>
  );
}
