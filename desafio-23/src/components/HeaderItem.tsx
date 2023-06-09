import { Check } from "phosphor-react";

interface Props {
  number: string;
  text: string;
  page: number;
}

export function HeaderItem({ number, text, page }: Props) {
  function getStatus() {
    if (page === Number(number)) return "active";
    if (page > Number(number)) return "filled";
    return "disabled";
  }

  return (
    <div>
      <h3 className={getStatus()}>
        {page > Number(number) ? <Check size={20} weight="bold" /> : number}
      </h3>
      <h2 className={getStatus()}>{text}</h2>
    </div>
  );
}
