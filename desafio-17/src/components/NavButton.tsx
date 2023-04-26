interface Props {
  svg: JSX.Element
  category?: string
}

export function NavButton({ svg, category }: Props) {
  return (
    <button type="button" className={category ?? ""}>
      {svg}
    </button>
  )
}
