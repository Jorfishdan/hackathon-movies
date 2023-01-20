import { Link } from "react-router-dom";
import "./Homepage.scss";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieView from "../../components/MovieView";

function HomePage({setSearchText}) {
  return (
    <>
      <NavBar />
      <div className="homepage">
        <SearchBar setSearchText={setSearchText}/>
        {/* <MovieView /> */}
      </div>
    </>
  );
}
export default HomePage;
