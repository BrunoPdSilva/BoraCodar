interface Props {
  svg: JSX.Element
}

export function NavButton({ svg }: Props) {
  return (
    <button type="button">
      {svg}
    </button>
  )
}
