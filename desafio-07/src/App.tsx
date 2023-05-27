import { Header } from './components/Header';
import { blocks } from './data/blocksData';
import { Card } from './components/Card';

function App() {
  return (
    <>
      <Header />
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
