import Pamonha from "./assets/pamonha.svg";
import Cesta from "./assets/cesta.svg";
import Panela from "./assets/panela.svg";

function App() {
  return (
    <div className="grid h-screen grid-rows-2">
      <section className="flex items-center justify-center gap-14 bg-brown-100 font-sourceSerif">
        <img
          className="h-[18.31rem] w-[25.56rem]"
          src={Pamonha}
          alt="Imagem de uma pamonha"
        />
        <div className="h-[293px] pt-10">
          <h1 className="text-[4.5rem] font-bold text-brown-300">Pamonha</h1>

          <p className="text-[2.375rem] text-brown-300">
            Prato típico com milho verde ralado
          </p>

          <div className="mt-3 flex h-11 items-center gap-4">
            <p className="text-4xl  text-brown-200">Porções</p>
            <div className="flex items-center gap-5">
              <button>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.3846 16C23.3846 16.3264 23.2549 16.6395 23.0241 16.8703C22.7933 17.1011 22.4803 17.2308 22.1538 17.2308H9.84616C9.51974 17.2308 9.20669 17.1011 8.97587 16.8703C8.74506 16.6395 8.61539 16.3264 8.61539 16C8.61539 15.6736 8.74506 15.3605 8.97587 15.1297C9.20669 14.8989 9.51974 14.7692 9.84616 14.7692H22.1538C22.4803 14.7692 22.7933 14.8989 23.0241 15.1297C23.2549 15.3605 23.3846 15.6736 23.3846 16ZM32 16C32 19.1645 31.0616 22.2579 29.3035 24.8891C27.5454 27.5203 25.0466 29.5711 22.1229 30.7821C19.1993 31.9931 15.9823 32.3099 12.8786 31.6926C9.77486 31.0752 6.92394 29.5513 4.6863 27.3137C2.44866 25.0761 0.924806 22.2251 0.307443 19.1214C-0.309921 16.0177 0.00693254 12.8007 1.21793 9.87706C2.42894 6.95344 4.4797 4.45459 7.11088 2.69649C9.74207 0.938384 12.8355 0 16 0C20.2421 0.00447972 24.3092 1.69163 27.3088 4.69124C30.3084 7.69085 31.9955 11.7579 32 16ZM29.5385 16C29.5385 13.3223 28.7444 10.7048 27.2568 8.47843C25.7692 6.25204 23.6548 4.51679 21.1809 3.49209C18.7071 2.4674 15.985 2.19929 13.3588 2.72168C10.7326 3.24406 8.32026 4.53347 6.42687 6.42686C4.53348 8.32025 3.24407 10.7326 2.72168 13.3588C2.1993 15.985 2.4674 18.7071 3.4921 21.1809C4.51679 23.6548 6.25205 25.7692 8.47844 27.2568C10.7048 28.7444 13.3223 29.5385 16 29.5385C19.5894 29.5344 23.0306 28.1067 25.5686 25.5686C28.1067 23.0306 29.5344 19.5894 29.5385 16Z"
                    fill="#9B6647"
                  />
                </svg>
              </button>
              <span className="font-sourceSans text-[2.5rem] text-brown-200">01</span>
              <button>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0C12.8355 0 9.74207 0.938383 7.11088 2.69649C4.4797 4.45459 2.42894 6.95344 1.21793 9.87706C0.00693255 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77486 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C31.9955 11.7579 30.3084 7.69085 27.3088 4.69124C24.3092 1.69163 20.2421 0.00447972 16 0ZM16 29.5385C13.3223 29.5385 10.7048 28.7444 8.47844 27.2568C6.25205 25.7692 4.51679 23.6548 3.4921 21.1809C2.4674 18.7071 2.1993 15.985 2.72168 13.3588C3.24407 10.7326 4.53348 8.32025 6.42687 6.42686C8.32026 4.53347 10.7326 3.24406 13.3588 2.72168C15.985 2.19929 18.7071 2.4674 21.1809 3.49209C23.6548 4.51679 25.7692 6.25204 27.2568 8.47843C28.7444 10.7048 29.5385 13.3223 29.5385 16C29.5344 19.5894 28.1067 23.0306 25.5686 25.5686C23.0306 28.1067 19.5894 29.5344 16 29.5385ZM23.3846 16C23.3846 16.3264 23.2549 16.6395 23.0241 16.8703C22.7933 17.1011 22.4803 17.2308 22.1538 17.2308H17.2308V22.1538C17.2308 22.4803 17.1011 22.7933 16.8703 23.0241C16.6395 23.2549 16.3264 23.3846 16 23.3846C15.6736 23.3846 15.3605 23.2549 15.1297 23.0241C14.8989 22.7933 14.7692 22.4803 14.7692 22.1538V17.2308H9.84616C9.51974 17.2308 9.20669 17.1011 8.97587 16.8703C8.74506 16.6395 8.61539 16.3264 8.61539 16C8.61539 15.6736 8.74506 15.3605 8.97587 15.1297C9.20669 14.8989 9.51974 14.7692 9.84616 14.7692H14.7692V9.84615C14.7692 9.51973 14.8989 9.20668 15.1297 8.97587C15.3605 8.74505 15.6736 8.61538 16 8.61538C16.3264 8.61538 16.6395 8.74505 16.8703 8.97587C17.1011 9.20668 17.2308 9.51973 17.2308 9.84615V14.7692H22.1538C22.4803 14.7692 22.7933 14.8989 23.0241 15.1297C23.2549 15.3605 23.3846 15.6736 23.3846 16Z"
                    fill="#9B6647"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center gap-16 bg-brown-200">
        <div>
          <div className="flex items-center gap-3">
            <img src={Cesta} alt="Cesta" />
            <h2 className="font-sourceSerif text-4xl font-bold text-brown-100">
              Ingredientes
            </h2>
          </div>
          <ul className="list-disc ps-6 font-sourceSans text-[28px] text-brown-100">
            <li>1 espiga de milho verde</li>
            <li>1 colher de sopa de açúcar</li>
            <li>1 colher de sopa de manteiga</li>
            <li>Sal a gosto</li>
            <li>Palha de milho (para embrulhar)</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <img src={Panela} alt="Panela" />
            <h2 className="font-sourceSerif text-4xl font-bold text-brown-100">Panela</h2>
          </div>
          <ol className="list-decimal ps-8 font-sourceSans text-[28px] text-brown-100">
            <li>Descasque a espiga de milho e corte os grãos.</li>
            <li>Bata o milho, açúcar, manteiga e sal no liquidificador.</li>
            <li>Coloque a massa nas palhas de milho e feche bem.</li>
            <li>Cozinhe em água fervente por cerca de 40 minutos.</li>
            <li>Deixe esfriar e sirva.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default App;
