// import SearchBar from "../SearchBar/SearchBar";
// import MovieCard from "../MovieCard";
import './HomePage.scss';
function HomePage() {
  return (
    <>
      <div className="homepage">
        <form className="homepage__form">
          <input classname="homepage__input"type="text" placeholder="Search here..."></input>
        </form>
      </div>
    </>
  );
}

export default HomePage;
