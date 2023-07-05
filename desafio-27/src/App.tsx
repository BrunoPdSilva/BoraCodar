import Four from "./assets/4.svg";
import { Planet } from "./components/Planet";

function App() {
  return (
    <div className="h-screen bg-stars bg-no-repeat bg-cover font-outfit flex items-center justify-center gap-60">
      <main className="w-96">
        <h1 className="text-gray-100 font-bold text-[2.5rem] leading-[120%]">
          Ops, esta página não foi encontrada
        </h1>
        <h2 className="text-gray-100 text-xl font-light leading-[140%] mt-6 mb-14">
          Parece que você se perdeu... Tente voltar para a página anterior ou
          acessar a home.
        </h2>

        <div className="flex gap-4">
          <button
            className="rounded-full bg-blue-200 px-6 py-3 text-sm font-medium leading-[140%] text-gray-200 hover:bg-blue-100 duration-300 ease-out"
            type="button"
          >
            VOLTAR
          </button>
          <button
            className="rounded-full bg-blue-200 px-6 py-3 text-sm font-medium leading-[140%] text-gray-200 hover:bg-blue-100 duration-300 ease-out"
            type="button"
          >
            IR PARA A HOME
          </button>
        </div>
      </main>

      <aside className="flex items-center gap-2">
        <img src={Four} alt="Imagem do número quatro" className="tsh" />
        <Planet />
        <img src={Four} alt="Imagem do número quatro" />
      </aside>
    </div>
  );
}

export default App;
