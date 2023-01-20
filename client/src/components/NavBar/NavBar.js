// import { Link } from "react-router-dom";
import './NavBar.scss';
import avatar from '../../assets/avatar.jpg'

function NavBar() {
  return (
    <nav className="NavBar">
        <div className="NavBar__logo-home-about-wrapper">
       <p className="NavBar__logo">LOGO</p>
      <ul className="NavBar__list-home-about">
        <li className="NavBar__home"> Home</li>
        <li className="NavBar__about"> About</li>
      </ul>
      </div>
      <div className="NavBar__random-avatar-wrapper">
      <button className="NavBar__random">Roulette</button>
      <img className="NavBar__avatar" src={avatar} alt="avatar profile"></img>
      {/* <p className='NavBar__username'>Rachel</p> */}
      </div>
    </nav>
  );
}
export default NavBar;
