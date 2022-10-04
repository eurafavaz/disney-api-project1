import '../Navbar/Navbar.css'
import logo from '../../assets/images/disney-logo.png'

function Navbar() {
  return (
    <nav className='navbar-container'>
      <img className='navbar-image' src={logo} alt="" />
      {/* <ul className='header-options'>
        <li>
          New character
        </li>
      </ul> */}
    </nav>
  );
}

export default Navbar;