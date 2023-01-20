import { Link } from "react-router-dom";
// import './HomePage.scss'
import NavBar from "../../components/NavBar/NavBar";
import MovieCard from "../../components/MovieCard";
import SearchBar from "../../components/SearchBar/SearchBar";

function HomePage() {
    return (
        <>
        <NavBar />
        <SearchBar />
        <MovieCard />
        </>
    )
}
export default HomePage;