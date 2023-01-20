import { Link } from "react-router-dom";
import './Homepage.scss'
import NavBar from "../../components/NavBar/NavBar";
import MovieCard from "../../components/MovieCard";
import SearchBar from "../../components/SearchBar/SearchBar";


function HomePage() {
    return (
        <>
        <NavBar />
        <div className="homepage">
        <form className="homepage__form">
          <input className="homepage__input"type="text" placeholder="Search here..."></input>
        </form>
  

      <div className='moviecard'>
      {/* <img className="moviecard__img" src={avatar} alt="movie poster">Picture</img> */}
        <div className="moviecard__title">title</div>
        <div className="moviecard__details">Summary details button to movie details page</div>
       </div>
       </div>
        </>
    )
}
export default HomePage;