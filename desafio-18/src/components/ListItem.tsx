interface Props {
  title: string;
  subtitle: string;
}

export function ListItem({ title, subtitle }: Props) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </li>
  );
}
