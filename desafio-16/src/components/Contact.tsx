import Foto from '../assets/Foto.png';

export function Contact() {
  return (
    <li>
      <img src={Foto} alt="User picture" />

      <div className="contactInfo">
        <h2>Abraão Sena</h2>
        <p>(11) 90876-1234</p>
      </div>
    </li>
  )
}
