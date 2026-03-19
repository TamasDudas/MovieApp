import { useEffect, useState } from 'react';
import type { Movie } from '@/types/type';
import MovieCard from './MovieCard';

export default function Home() {
 const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
 const [movies, setMovies] = useState<Movie[]>([]);
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
   setMovies(data.results);
  } catch (err) {
   setError('Failed to fetch movies');
  } finally {
   setLoading(false);
  }
 };

 useEffect(() => {
  fetchMovies();
 }, []);

 return (
  <div>
   {loading && <p>Loading...</p>}
   {error && <p>{error}</p>}
   <div className="flex flex-wrap flex-1 gap-x-2 gap-y-12">
    {movies.map((movie) => (
     <MovieCard key={movie.id} movie={movie} />
    ))}
   </div>
  </div>
 );
}
