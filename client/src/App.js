import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from "../src/pages/Homepage"
import About from "../src/pages/Homepage"
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/movie/:id" element={<HomePage />}/>
    <Route path="/about" element={<About />}/>
    <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
