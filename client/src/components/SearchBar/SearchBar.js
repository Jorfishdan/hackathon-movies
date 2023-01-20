import { useNavigate } from "react-router-dom";

function SearchBar({ searchText, setSearchText }) {
    const navigate = useNavigate();
    const updateSearchText = (e) => {
      navigate.push("/search")
      setSearchText(e.target.value)
    };
  
  return (
    <form className="homepage__form">
      <input
        className="homepage__input"
        type="text"
        placeholder="Search movies..."
        value={searchText}
        onChange={updateSearchText}
      ></input>
    </form>
  );
}
export default SearchBar;
