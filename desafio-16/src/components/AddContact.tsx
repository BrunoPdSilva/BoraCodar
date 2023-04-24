import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { X, Camera, IdentificationBadge, Phone } from 'phosphor-react';

import '../styles/AddContact.css';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export function AddContact({ setShowModal }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const openbtn = document.querySelector('button.toggleModal');

  function handleClick(e: MouseEvent) {
    if (openbtn && e.target === openbtn) {
      return;
    }

    if (ref.current && !ref.current.contains(e.target as Node)) {
      setShowModal(false);
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="overlay">
      <section className="AddContactModal" ref={ref}>
        <div className="header">
          <h1>Adicionar contato</h1>
          <button type="button" onClick={() => setShowModal(false)}>
            <X size={18} color="#E1E1E6" />
          </button>
        </div>

        <form>
          <div>
            <label className="pictureUpload">
              <Camera size={32} color="#E1E1E6" />
              <input type="file" />
            </label>

            <div className="input-wrapper">
              <label>
                <IdentificationBadge size={16} color="#E1E1E6" />
                <input
                  type="text"
                  placeholder="Nome do contato..."
                  autoComplete="none"
                />
              </label>

              <label>
                <Phone size={16} color="#E1E1E6" />
                <input
                  type="text"
                  placeholder="Número..."
                  autoComplete="none"
                />
              </label>
            </div>
          </div>

          <button type="submit">Salvar contato</button>
        </form>
      </section>
    </div>
  );
}
