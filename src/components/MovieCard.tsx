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
  <Card className="relative mx-auto w-full max-w-sm pt-0">
   <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
   <img
    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    alt={movie.title}
    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
   />
   <CardHeader>
    <CardAction>
     <Badge variant="secondary">Featured</Badge>
    </CardAction>
    <CardTitle>{movie.title}</CardTitle>
    <CardDescription>{movie.overview}</CardDescription>
    <div className="flex items-stretch justify-between">
     <p>{movie.release_date}</p>
     <div className="flex gap-1">
      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      <span>{movie.vote_average.toFixed(1)}</span>
     </div>
    </div>
   </CardHeader>
   <CardFooter>
    <Button className="w-full">View Details</Button>
   </CardFooter>
  </Card>
 );
}
