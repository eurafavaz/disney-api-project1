import "../Navbar/Navbar.css";
import logo from "../../assets/images/disney-logo.png";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="image-boxer">
        <img className="navbar-image" src={logo} alt="" />
      </div>
      <ul className="header-options">
        <li>
          <button className="add-character-button" type="button">
            New character
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
