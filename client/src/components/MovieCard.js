import { Link } from "react-router-dom";


function MovieCard() {
    return (
        <>
       <div>
        <img>Picture</img>
        <div>title</div>
        <Link to="/movieDetails"><div>Summary details button to movie details page</div></Link>
       </div>
        </>
    )
}

export default MovieCard;