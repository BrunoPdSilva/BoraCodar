import { CaretDown, MagnifyingGlass, MapPin } from "phosphor-react";
import { Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from "react";
import { Dropdown } from "./Dropdown";
import { Filter } from "../App";

import topIllustration from "../assets/ilustra-01.svg";
import bottomIllustration from "../assets/ilustra-02.svg";

interface Props {
  setFilter: Dispatch<SetStateAction<Filter | null>>;
}

export function Header({ setFilter }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const ref = dropdownRef.current;

      if (ref && !ref.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleSelect(value: string) {
    setDropdownValue(value);
    setShowDropdown(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const filter = {
      title: searchValue.toLowerCase().trim(),
      local: dropdownValue.toLowerCase().trim(),
    };

    setFilter(filter);
  }

  return (
    <>
      <header>
        <img src={topIllustration} alt="Top Illustration" />

        <section>
          <div className="heading">
            <p>Find your block</p>
            <h1>
              Encontre os <span>melhores blocos</span> de carnaval de 2023
            </h1>
          </div>

          <form name="search" onSubmit={e => handleSubmit(e)}>
            <div className="input-group">
              <MagnifyingGlass size={24} color="#E45858" />
              <input
                type="text"
                placeholder="Pesquise por nome"
                onChange={e => setSearchValue(e.target.value)}
                value={searchValue}
              />
            </div>

            <div
              className="input-group"
              ref={dropdownRef}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <MapPin size={24} color="#E45858" />
              <p>{dropdownValue || "Selecione uma cidade"}</p>
              <button type="button">
                <CaretDown size={24} color="#858793" />
              </button>

              {showDropdown && <Dropdown handleSelect={handleSelect} />}
            </div>

            <button type="submit">BUSCAR AGORA</button>
          </form>
        </section>

        <img src={bottomIllustration} alt="Bottom Illustration" />
      </header>
    </>
  );
}
