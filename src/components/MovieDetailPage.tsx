import type { Movie } from '../types/type';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetailPage() {
 const [movie, setMovie] = useState<Movie | null>(null);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState<string | null>(null);

 const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
 const { id } = useParams();

 const fetchMovieDetail = async () => {
  setLoading(true);
  setError(null);
  try {
   const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
   );
   const data = await response.json();
   setMovie(data);
  } catch (err) {
   setError('Failed to fetch movie details');
  } finally {
   setLoading(false);
  }
 };

 useEffect(() => {
  fetchMovieDetail();
 }, [id]);

 return (
  <div>
   {loading && <p>Loading...</p>}
   {error && <p>{error}</p>}
   {movie && (
    <div className="max-w-4xl mx-auto p-6">
     <div className="flex flex-col md:flex-row gap-6">
      <img
       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
       alt={movie.title}
       className="w-full md:w-1/3 object-cover rounded-lg"
      />
      <div className="flex-1">
       <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
       {movie.tagline && (
        <h2 className="text-xl font-semibold mb-2">{movie.tagline}</h2>
       )}
       <p className="mb-4">{movie.overview}</p>
       <p className="mb-2">
        <strong>Release Date:</strong> {movie.release_date}
       </p>
       <p className="mb-2">
        <strong>Vote Average:</strong> {movie.vote_average}
       </p>
       <p className="mb-2">
        <strong>Vote Count:</strong> {movie.vote_count}
       </p>
      </div>
     </div>
    </div>
   )}
  </div>
 );
}
