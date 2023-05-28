import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { blocksData } from './data/blocksData';
import { Card } from './components/Card';
import { filterBlocks } from './utils/filter';

export interface Filter {
  title?: string;
  local?: string;
}

function App() {
  const [filter, setFilter] = useState<Filter | null>(null);
  const [blocks, setBlocks] = useState(blocksData);

  useEffect(() => filterBlocks({ filter, setBlocks }), [filter]);

  return (
    <>
      <Header setFilter={setFilter} />
      <main className="blocos">
        <div className="section-header">
          <h2>Blocos recomendados</h2>
          <div className="buttons">
            <button>LISTA</button>
            <button className="secundary">MAPA</button>
          </div>
        </div>

        <section className="cards">
          {blocks.map(block => (
            <Card key={block.img} block={block} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
