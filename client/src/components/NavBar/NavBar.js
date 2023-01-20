// import { Link } from "react-router-dom";
import './NavBar.scss';

function NavBar() {
  return (
    <nav className="NavBar">
       <p className="NavBar__logo">LOGO</p>
      <ul className="NavBar__list-home-about">
        <li className="NavBar__home"> Home</li>
        <li className="NavBar__about"> About</li>
      </ul>
      <button className="NavBar__random">Roulette</button>
      <img className="Navbar__avatar"></img>
    </nav>
  );
}
export default NavBar;
