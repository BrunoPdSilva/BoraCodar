import { Thunder } from "./assets/Thunder";
import { Poster } from "./components/Poster";

import logo from "./assets/logo.svg";
import barbie from "./assets/barbie.png";
import oppenheimer from "./assets/oppenheimer.png";
import indiana from "./assets/indiana.png";

export function App() {
  return (
    <div className="min-h-screen bg-gradient2 flex items-center justify-center">
      <main className="w-full max-w-[52.87rem] px-24 py-16 bg-gray-300 rounded-2xl border-8 border-purple flex flex-col gap-9">
        <header className="flex justify-between items-center">
          <img src={logo} alt="Movie AI Logo" />
          <button className="bg-gradient1 hover:bg-gradient2 h-12 px-4 py-2 rounded flex items-center gap-2 font-outfit text-base leading-5 text-white transition-all ease-in-out duration-300">
            Nova recomendação
            <Thunder />
          </button>
        </header>

        <section className="flex gap-9">
          <Poster title="Barbie" stars="4.9" scheduled="1:54:00" image={barbie} />
          <Poster title="Oppenheimer" stars="4.9" scheduled="3:00:00" image={oppenheimer} />
          <Poster title="Indiana Jones" stars="4.9" scheduled="2:22:00" image={indiana} />
        </section>
      </main>
    </div>
  );
}
