import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./pages/Homepage/Homepage";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar/NavBar";
// import HomePage from './components/HomePage/HomePage';
import HomePage from "./pages/Homepage/Homepage";
function App() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <HomePage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
