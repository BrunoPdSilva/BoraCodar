import { Check } from "phosphor-react";

interface Props {
  status?: "active" | "filled";
  number: string;
  text: string;
}

export function HeaderItem({ status, number, text }: Props) {
  const isDisabled = status !== "active" && status !== "filled";

  return (
    <div>
      <h3 className={status}>
        {status !== "filled" ? number : <Check size={20} weight="bold" />}
      </h3>
      <h2 className={isDisabled ? "disabled" : ""}>{text}</h2>
    </div>
  );
}
