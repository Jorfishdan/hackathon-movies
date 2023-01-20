import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

 const MovieCard = ({ movie }) => {
  const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailURL = `/movies/${movie.id}`;

  return (
    <>
      <div className="col-lg-3 col-md-3 col-2 my-4">
        <div className="card">
          <img
            src={posterURL}
            className="card-image-top"
            alt={movie.original_title}
          />
          <div className="card-body">
          <h3 className="card-title">{movie.original_title}</h3>
          <Link to={detailURL} className="btn btn-primary">Show Details</Link>
          </div>
        </div>
      </div>
    </>
  );
}
const MovieView = ({searchResults}) => {
  const resultHTML = searchResults.map((obj, i) => {
  return <MovieCard movie={obj} key={i}/>
}) 
return (
  <>
  {resultHTML &&
  <div className="container"><div className="row">{resultHTML}</div></div>}
  </>
)
}
export default MovieView;