export interface Movie {
 id: number;
 title: string;
 overview: string;
 tagline?: string;
 poster_path: string;
 release_date: string;
 vote_average: number;
 vote_count: number;
 isFavorite: boolean;
 isWatched: boolean;
 isPlanned: boolean;
}

export interface ApiResponse {
 page: number;
 results: Movie[];
 total_pages: number;
 total_results: number;
}

export type Action =
 | { type: 'SET_MOVIES'; payload: Movie[] }
 | {
    type: 'TOGGLE_FLAG';
    payload: { id: number; flag: 'isFavorite' | 'isWatched' | 'isPlanned' };
   };
