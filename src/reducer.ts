import type { Action, Movie } from './types/type';

export default function reducer(state: Movie[], action: Action): Movie[] {
 switch (action.type) {
  case 'SET_MOVIES':
   return action.payload.map((movie) => ({
    ...movie,
    isFavorite: false,
    isWatched: false,
    isPlanned: false,
   }));
  case 'TOGGLE_FLAG':
   return state.map((movie) =>
    movie.id === action.payload.id
     ? { ...movie, [action.payload.flag]: !movie[action.payload.flag] }
     : movie,
   );
  default:
   return state;
 }
}
