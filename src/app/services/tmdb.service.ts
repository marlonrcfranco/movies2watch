import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Movie } from '../models/movie';
import {  } from 'q';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly params = {
    api_key: '6dea98b38f765ad962359956d3867301',
    language: 'pt-BR'
  };

  constructor(
    private http: HttpClient
  ) {}

  private getParams(params?: any) {
    const obj = { ...this.params, ...params };
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return '?' + str.join('&');
  }

  getPopularMovies(page: number) {
    return this.http.get(`${this.baseUrl}/movie/popular${this.getParams({ page: page })}`)
      .pipe(map((res: any) => <Movie[]>res.results))
      .pipe(delay(500));
  }

  getTopMovies(page: number) {
    return this.http.get(`${this.baseUrl}/movie/top_rated${this.getParams({ page: page })}`)
      .pipe(map((res: any) => <Movie[]>res.results))
      .pipe(delay(500));
  }

  getUpcomingMovies(page: number) {
    return this.http.get(`${this.baseUrl}/movie/upcoming${this.getParams({ page: page })}`)
      .pipe(map((res: any) => <Movie[]>res.results))
      .pipe(delay(500));
  }

  searchMovies(query: string) {
    return this.http.get(`${this.baseUrl}/search/movie${this.getParams({ query: query })}`)
      .pipe(map((res: any) => <Movie[]>res.results));
  }

  searchPersons(query: string) {
    return this.http.get(`${this.baseUrl}/search/person${this.getParams({ query: query })}`)
      .pipe(map((res: any) => <Person[]>res.results));
  }

  searchPerson(name: string) {
    return this.http.get(`${this.baseUrl}/search/person${this.getParams({ query: name })}`)
      .pipe(map((res: any) => {
        if (res && res.results && res.results.length > 0) { return <Person>res.results[0]; }
        return null;
      }));
  }

  getMovieDetail(id: number) {
    const append = '&append_to_response=credits';
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}${this.getParams()}${append}`);
  }

  getPersonDetail(id: number) {
    const append = '&append_to_response=credits';
    return this.http.get<Person>(`${this.baseUrl}/person/${id}${this.getParams()}${append}`);
  }


  dicoverMovie(page: any, genre: any) {
    return this.http.get(`${this.baseUrl}/discover/movie?${this.getParams({ page: page, with_genres: genre })}`)
      .pipe(map((res: any) => <Movie[]>res.results))
      .pipe(delay(500));
  }

  getActionMovies(page: any) {
    return this.dicoverMovie(page,'28');
  }

  getAdventureMovies(page: any) {
    return this.dicoverMovie(page,'12');
  }

  getAnimationMovies(page: any) {
    return this.dicoverMovie(page,'16');
  }

  getComediaMovies(page: any) {
    return this.dicoverMovie(page,'35');
  }

  getCrimeMovies(page: any) {
    return this.dicoverMovie(page,'80');
  }

  getDocMovies(page: any) {
    return this.dicoverMovie(page,'99');
  }

  getDramaMovies(page: any) {
    return this.dicoverMovie(page,'18');
  }

  getFamilyMovies(page: any) {
    return this.dicoverMovie(page,'10751');
  }

  getFantasyMovies(page: any) {
    return this.dicoverMovie(page,'14');
  }

  getHistoryMovies(page: any) {
    return this.dicoverMovie(page,'36');
  }

  getTerrorMovies(page: any) {
    return this.dicoverMovie(page,'27');
  }

  getMusicMovies(page: any) {
    return this.dicoverMovie(page,'10402');
  }

  getMisteryMovies(page: any) {
    return this.dicoverMovie(page,'9648');
  }

  getRomanceMovies(page: any) {
    return this.dicoverMovie(page,'10749');
  }

  getScifiMovies(page: any) {
    return this.dicoverMovie(page,'878');
  }

  getTvMovies(page: any) {
    return this.dicoverMovie(page,'10770');
  }

  getThrillerMovies(page: any) {
    return this.dicoverMovie(page,'53');
  }

  getWarMovies(page: any) {
    return this.dicoverMovie(page,'10752');
  }

  getFaroestMovies(page: any) {
    return this.dicoverMovie(page,'37');
  }
  

}
