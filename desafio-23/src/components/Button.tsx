interface Props {
  type: "secondary" | "primary";
  text: string;
  func?: () => void;
}

export function Button({ type, text, func }: Props) {
  return (
    <div className="action-buttons">
      <button
        type={text !== "ENVIAR RESPOSTA" ? "button" : "submit"}
        className={type}
        onClick={func}
      >
        {text}
      </button>
    </div>
  );
}
