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

      <img className={character.name === "BB-8" ? "bb8" : ""} src={character.image} alt="Character Star Wars" />
    </>
  );
}
