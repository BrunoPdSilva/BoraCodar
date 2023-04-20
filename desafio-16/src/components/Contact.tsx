interface Props {
  name: string;
  number: string;
  photo: string;
}

export function Contact({ name, number, photo }: Props) {
  return (
    <li>
      <img src={photo} alt="User picture" />

      <div className="contactInfo">
        <h2>{name}</h2>
        <p>{number}</p>
      </div>
    </li>
  )
}
