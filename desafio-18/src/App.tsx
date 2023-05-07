import { data } from './data/charactersData';

import { ListItem } from './components/ListItem';

import './Sass/app.scss';

export function App() {
  const { rey, finn, bb8 } = data;

  return (
    <main>
      <section className="Card Finn">
        <span>Finn</span>
      </section>
 
      <section className="Card-active">
        <div className="header">
          <h1>{rey.name}</h1>
          <h2>{rey.description}</h2>
        </div>

        <ul className="details">
          <ListItem title="Filmes" subtitle={rey.movies} />
          <ListItem title="Espécie" subtitle={rey.specie} />
          <ListItem title="Altura" subtitle={rey.height} />
          <ListItem title="Localidade" subtitle={rey.local} />
          <ListItem title="Armas" subtitle={rey.weapons} />
        </ul>

        <img src={rey.image} alt="Rey Walker Star Wars" className="character" />
      </section> 

      <section className="Card BB8">
        <span>BB8</span>
      </section>
    </main>
  )
}
