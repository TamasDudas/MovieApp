import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FavoritesPage from './components/FavoritesPage';
import MovieDetailPage from './components/MovieDetailPage';
import { useEffect, useReducer } from 'react';
import reducer from './reducer';

function App() {
 const [movies, dispatch] = useReducer(
  reducer,
  JSON.parse(localStorage.getItem('movies') || '[]'),
 );

 useEffect(() => {
  localStorage.setItem('movies', JSON.stringify(movies));
 }, [movies]);

 return (
  <BrowserRouter>
   <Navbar />
   <Routes>
    <Route
     path="/"
     element={
      <Home
       movies={movies}
       onSetMovies={(movies) =>
        dispatch({ type: 'SET_MOVIES', payload: movies })
       }
       onToggleFlag={(id, flag) =>
        dispatch({ type: 'TOGGLE_FLAG', payload: { id, flag } })
       }
      />
     }
    />
    <Route path="/favorites" element={<FavoritesPage />} />
    <Route path="/movie/:id" element={<MovieDetailPage />} />
   </Routes>
  </BrowserRouter>
 );
}

export default App;
