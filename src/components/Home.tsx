import { useEffect, useState } from 'react';
import type { Movie } from '@/types/type';
import MovieCard from './MovieCard';

interface HomeProps {
 movies: Movie[];
 onSetMovies: (movies: Movie[]) => void;
 onToggleFlag: (
  id: number,
  flag: 'isFavorite' | 'isWatched' | 'isPlanned',
 ) => void;
}

export default function Home({ movies, onSetMovies, onToggleFlag }: HomeProps) {
 const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

 const [loading, setLoading] = useState(false);
 const [error, setError] = useState<string | null>(null);

 const fetchMovies = async () => {
  setLoading(true);
  setError(null);
  try {
   const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
   );
   const data = await response.json();
   onSetMovies(data.results);
  } catch (err) {
   setError('Failed to fetch movies');
  } finally {
   setLoading(false);
  }
 };

 useEffect(() => {
  if (movies.length === 0) {
   fetchMovies();
  }
 }, []);
 return (
  <div>
   {loading && <p>Loading...</p>}
   {error && <p>{error}</p>}
   <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 px-6">
    {movies.map((movie) => (
     <MovieCard key={movie.id} movie={movie} onToggleFlag={onToggleFlag} />
    ))}
   </div>
  </div>
 );
}
