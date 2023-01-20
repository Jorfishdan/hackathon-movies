import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./pages/Homepage/Homepage";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar/NavBar";
// import HomePage from './components/HomePage/HomePage';
import HomePage from "./pages/Homepage/Homepage";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import MovieView from "./components/MovieView";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      const searchMovie = async () => {
      try {
        const {response} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`
        .then((response) => response.json())
       .get(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`
       .then((data) => {
          setSearchResults(data.results);
        })))} catch (error){}
  
    searchMovie();
}}}, [searchText]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage setSearchText={setSearchText}/>} />
          <Route
            path="/search"
            element={
              <MovieView
                keyword={searchText}
                searchResults={searchResults}
                setSearchText={setSearchText}
              />
            }
          />
          <Route path="/movie/:id" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
