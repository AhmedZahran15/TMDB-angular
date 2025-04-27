import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private http = inject(HttpClient);
  getAllTrending(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${environment.tmdb_api_key}`
    );
  }
  getTrendingMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${environment.tmdb_api_key}`
    );
  }
  getTrendingTv(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${environment.tmdb_api_key}`
    );
  }
  getTrendingPeople(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/person/day?language=en-US&api_key=${environment.tmdb_api_key}`
    );
  }
  getMovieDetails(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${environment.tmdb_api_key}`
    );
  }
  getTvDetails(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=${environment.tmdb_api_key}`
    );
  }
  getPersonDetails(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/person/${id}?language=en-US&api_key=${environment.tmdb_api_key}`
    );
  }
}
