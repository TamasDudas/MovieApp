export interface Movie {
 id: number;
 title: string;
 overview: string;
 poster_path: string;
 release_date: string;
 vote_average: number;
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
