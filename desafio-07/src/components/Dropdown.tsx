interface Props {
  handleSelect: (value: string) => void;
}

export function Dropdown({ handleSelect }: Props) {
  return (
    <ul className="dropdown">
      <li onClick={() => handleSelect("")}>Mostrar todas</li>
      <li onClick={() => handleSelect("Curitiba")}>Curitiba</li>
      <li onClick={() => handleSelect("Florianópolis")}>Florianópolis</li>
      <li onClick={() => handleSelect("Porto Alegre")}>Porto Alegre</li>
      <li onClick={() => handleSelect("Rio de Janeiro")}>Rio de Janeiro</li>
      <li onClick={() => handleSelect("São Paulo")}>São Paulo</li>
    </ul>
  );
}
