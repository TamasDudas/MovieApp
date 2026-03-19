import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FavoritesPage from './components/FavoritesPage';
import MovieDetailPage from './components/MovieDetailPage';

function App() {
 return (
  <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/favorites" element={<FavoritesPage />} />
    <Route path="/movie/:id" element={<MovieDetailPage />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
