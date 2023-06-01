import Avatar from "../assets/Avatar.png";

export function DropdownHeader() {
  return (
    <div className="user">
      <img src={Avatar} alt="User profile image" />

      <div>
        <h2>Marvin McKinney</h2>
        <p>marvin.mckinney@example.com</p>
      </div>
    </div>
  );
}
