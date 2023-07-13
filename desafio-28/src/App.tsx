import { Code, ImageSquare, MagicWand, MusicNotesSimple, PaperPlaneRight, PlayCircle, PlusCircle } from "phosphor-react";
import { Button } from "./components/Button";
import { Icon } from "./components/Icon";

function App() {
  return (
    <main className="bg-gray-700/80 max-w-[75rem] w-full p-[3.75rem] rounded-[2rem] border border-gray-400 flex flex-col items-center gap-10">
      <section className="max-w-[42.62rem] flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-6">
          <Icon icon={MagicWand} size={40} className="border-none text-gray-200" />

          <h1 className="font-semibold text-[2rem] text-gray-100">
            Experimente o poder da Inteligência Artificial
          </h1>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[38rem]">
          <Button icon={Code} label="Gerador de códigos" />
          <Button icon={ImageSquare} label="Edição de fotos" />
          <Button icon={PlayCircle} label="Geração de vídeos" />
          <Button icon={MusicNotesSimple} label="Criador de áudios e músicas" />
        </div>
      </section>

      <div className="w-full h-[1px] bg-gray-400"></div>

      <footer className="flex gap-4 w-full">
        <div className="w-full ps-4 h-16 bg-gray-600 border border-gray-400 rounded-2xl flex items-center gap-4 overflow-hidden focus-within:border-gray-300 hover:border-gray-300 transition-colors ease-in-out duration-300">
          <button type="button" className="text-gray-300 hover:text-gray-200 transition-colors ease-in-out duration-300">
            <PlusCircle size={32}  />
          </button>
          <input
            type="text"
            placeholder="Envie uma mensagem ou digite “/” para exibir os comandos"
            className="w-full h-full bg-gray-600 font-ibm text-lg text-gray-200 placeholder:text-gray-200 outline-none"
          />
        </div>

        <button type="button">
          <Icon icon={PaperPlaneRight} className="border-gray-400 text-gray-100 focus-within:border-gray-300 hover:border-gray-300 transition-colors ease-in-out duration-300" />
        </button>
      </footer>
    </main>
  );
}

export default App;
