import { Card, CardAction, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Movie } from '../types/type';
import { Star } from 'lucide-react';

interface MovieCardProps {
 movie: Movie;
 onToggleFlag: (
  id: number,
  flag: 'isFavorite' | 'isWatched' | 'isPlanned',
 ) => void;
}

export default function MovieCard({ movie, onToggleFlag }: MovieCardProps) {
 return (
  <Card className="flex max-w-full p-0">
   <img
    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    alt={movie.title}
    className="w-full object-cover m-0  "
   />
   <CardHeader className="p-4 flex flex-col gap-2">
    <div>
     <CardAction className="flex gap-2 mb-3">
      <Badge
       variant={movie.isFavorite ? 'default' : 'outline'}
       onClick={() => onToggleFlag(movie.id, 'isFavorite')}
      >
       Favorite
      </Badge>
      <Badge
       variant={movie.isPlanned ? 'default' : 'outline'}
       onClick={() => onToggleFlag(movie.id, 'isPlanned')}
      >
       Planned
      </Badge>

      <Badge
       variant={movie.isWatched ? 'default' : 'outline'}
       onClick={() => onToggleFlag(movie.id, 'isWatched')}
      >
       Watched
      </Badge>
     </CardAction>
    </div>
    <CardTitle>{movie.title}</CardTitle>
    {/* <CardDescription>{movie.overview}</CardDescription> */}
    <div className="flex  justify-between w-full  my-4 ">
     <p>{movie.release_date}</p>
     <div className="flex gap-1 mt-auto">
      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      <span>{movie.vote_average.toFixed(1)}</span>
     </div>
    </div>
   </CardHeader>
  </Card>
 );
}
