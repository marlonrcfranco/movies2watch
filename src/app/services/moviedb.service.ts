import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Genre, GenreResponse } from '../models/genre';
import { Cast, CastResponse } from '../models/cast';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie } from "../models/movie";


@Injectable({
  providedIn: 'root'
})

export class MoviedbService {
 	url = 'https://api.themoviedb.org/3/';
  apiKey = '6dea98b38f765ad962359956d3867301';
 
  constructor(private http: HttpClient) { }

  getAllMoviesByGenres(id_genero: number) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key=8ea851d4024207756b150bd91a795d24&with_genres='+id_genero)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
	
	getMovieCast(movieID: any): Observable<Cast[]> {
	  return this.http.get(this.url+'movie/'+movieID+'/credits?api_key='+this.apiKey).pipe(
      map((response: CastResponse) => {
        console.log(response);
        return response.cast;
      })
    );
	}
	
  getActionMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=28&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
	
  getAdventureMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=12&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
	
  getAnimationMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=16&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
	
  getComediaMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=35&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
	
  getCrimeMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=80&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
	
  getDocMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=99&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
	
  getDramaMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=18&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
	
  getFamilyMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=10751&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
	
  getFantasyMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=14&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
	
  getHistoryMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=36&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
	
  getTerrorMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=27&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
	
  getMusicMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=10402&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
  }
  getMisteryMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=9648&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
  }
  getRomanceMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=10749&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
  }
  getScifiMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=878&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
  }
  getTvMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=10770&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
  }
  getThrillerMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=53&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
  }
  getWarMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=10752&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
  }
  getFaroestMovies(page: any) {
	  return new Promise(resolve => {
	    this.http.get(this.url+'discover/movie?api_key='+this.apiKey+'&with_genres=37&page='+page)
	    .subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}
	
	getMovieDetail(movieID: string): Observable<Movie> {
    return this.http.get(this.url+'movie/'+movieID+'?api_key='+this.apiKey+'&language=en').pipe(
      map((response: Movie) => {
        return response;
      })
    );
  }





}
 
