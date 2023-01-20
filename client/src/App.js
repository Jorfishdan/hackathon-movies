import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from "./pages/Homepage/Homepage"
import About from "./pages/Homepage/Homepage"
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>

    <NavBar />
    {/* <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/movie/:id" element={<HomePage />}/>
    <Route path="/about" element={<About />}/>
    <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
