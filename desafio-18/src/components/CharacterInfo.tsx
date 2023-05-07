import { ICharacter } from '../data/charactersData';
import { ListItem } from './ListItem';

export function CharacterInfo({ character }: ICharacter) {
  return (
    <>
      <div className="header">
        <h1>{character.name}</h1>
        <h2>{character.description}</h2>
      </div>

      <ul className="details">
        <ListItem title="Filmes" subtitle={character.movies} />
        <ListItem title="Espécie" subtitle={character.specie} />
        <ListItem title="Altura" subtitle={character.height} />
        <ListItem title="Localidade" subtitle={character.local} />
        <ListItem title="Armas" subtitle={character.weapons} />
      </ul>

      <img src={character.image} alt="Rey Walker Star Wars" />
    </>
  );
}
