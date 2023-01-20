import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
        <Link to="/">LOGO</Link>
      <ul>
        <li><Link to="/" className="NavBar__home"> Home</Link></li>
        <li><Link to="/about" className="NavBar__about"> About</Link></li>
      </ul>
      <button className="NavBar__random"> Movie Roulette</button>
    </nav>
  );
}
export default NavBar;
