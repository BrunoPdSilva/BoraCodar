import { MapPin } from 'phosphor-react';

interface Props {
  block: { img: string; title: string; description: string; local: string };
}

export function Card({ block }: Props) {
  return (
    <div className="card">
      <img src={block.img} alt="Imagem do bloco" />

      <div className="details">
        <div>
          <h3>{block.title}</h3>
          <p>{block.description}</p>
        </div>

        <div className="local">
          <MapPin size={24} color="#e45858" />
          <p>{block.local}</p>
        </div>
      </div>
    </div>
  );
}
