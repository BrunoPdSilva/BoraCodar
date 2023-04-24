import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from 'react';
import { IContact } from '../data/dataBase';

import { X, Camera, IdentificationBadge, Phone } from 'phosphor-react';

import DefaultImage from '../assets/user.png';

import '../styles/AddContact.css';

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setNewContact: Dispatch<SetStateAction<IContact | null>>;
}

const initialState: IContact = { name: '', number: '', photo: '' };

export function AddContactModal({ setShowModal, setNewContact }: Props) {
  const [newContactData, setNewContactData] = useState<IContact>(initialState);
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  const openbtn = document.querySelector('button.toggleModal');

  function handleClickOutsideModal(e: MouseEvent) {
    if (openbtn && e.target === openbtn) return;

    if (ref.current && !ref.current.contains(e.target as Node)) {
      setShowModal(false);
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setNewContactData(prevState => ({ ...prevState, [name]: value }));
  }

  function handleUploadImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function (event) {
      setImage(event.target && event.target.result);
    };
    reader.readAsDataURL(file as Blob);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setNewContact(prevState => ({
      ...prevState,
      photo: image as string || DefaultImage,
      name: newContactData.name.trim(),
      number: newContactData.number.trim(),
    }));
    setNewContactData({ name: '', number: '', photo: '' });
    setShowModal(false);
  }

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutsideModal);
    return () => document.body.removeEventListener('click', handleClickOutsideModal);
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

        <form onSubmit={handleSubmit}>
          <div>
            <label className="pictureUpload">
              <Camera size={32} color="#E1E1E6" />
              <input
                type="file"
                name="photo"
                onChange={e => handleUploadImage(e)}
                value={newContactData.photo}
              />
            </label>

            <fieldset className="input-wrapper">
              <label>
                <IdentificationBadge size={16} color="#E1E1E6" />
                <input
                  type="text"
                  name="name"
                  autoComplete="none"
                  placeholder="Nome do contato..."
                  onChange={e => handleInputChange(e)}
                  value={newContactData.name}
                />
              </label>

              <label>
                <Phone size={16} color="#E1E1E6" />
                <input
                  type="text"
                  name="number"
                  autoComplete="none"
                  placeholder="Número..."
                  onChange={e => handleInputChange(e)}
                  value={newContactData.number}
                />
              </label>
            </fieldset>
          </div>

          <button type="submit">Salvar contato</button>
        </form>
      </section>
    </div>
  );
}
