interface Props {
  svg: JSX.Element;
  callback: () => void;
}

export function NavButton({ svg, callback }: Props) {
  return (
    <button type="button" onClick={() => callback()}>
      {svg}
    </button>
  );
}
