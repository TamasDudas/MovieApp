import { Button } from '@/components/ui/button';
import {
 Card,
 CardAction,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Movie } from '../types/type';
import { Star } from 'lucide-react';

interface MovieCardProps {
 movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
 return (
  <Card className="flex max-w-full p-0">
   <img
    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    alt={movie.title}
    className="w-full object-cover m-0  "
   />
   <CardHeader>
    <CardAction>
     <Badge variant="secondary">Featured</Badge>
    </CardAction>
    <CardTitle>{movie.title}</CardTitle>
    <CardDescription>{movie.overview}</CardDescription>
    <div className="flex  justify-between  my-4 ">
     <p>{movie.release_date}</p>
     <div className="flex gap-1 mt-auto">
      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      <span>{movie.vote_average.toFixed(1)}</span>
     </div>
    </div>
   </CardHeader>
   <CardFooter className="mt-auto">
    <Button className="w-full ">View Details</Button>
   </CardFooter>
  </Card>
 );
}
