import { IContact } from "../data/dataBase";

export function Contact({ name, number, photo }: IContact) {
  return (
    <li>
      <img src={photo} alt="User picture" className="userPicture"/>

      <div className="contactInfo">
        <h2>{name}</h2>
        <p>{number}</p>
      </div>
    </li>
  )
}
