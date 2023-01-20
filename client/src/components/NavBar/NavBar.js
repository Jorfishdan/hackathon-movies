// import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
       <div className="NavBar__logo">LOGO</div>
      <ul>
        <li className="NavBar__home"> Home</li>
        <li className="NavBar__about"> About</li>
      </ul>
      <button className="NavBar__random"> Movie Roulette</button>
    </nav>
  );
}
export default NavBar;
