import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../models/movie';
import { LoadingController, Content } from '@ionic/angular';
import { Cinema } from '../../models/cinema';
import { CinemaService } from '../../services/cinema-service';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  segment: string;
  page: number;
  movies: Movie[];
  cinema: Cinema;
  @ViewChild(Content) content: Content;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loadingCtrl: LoadingController,
    private tmdb: TmdbService,
    public cinemaService: CinemaService
  ) 
  { }

  ngOnInit() {
    this.onTabSelected('upcoming');
    const movieId = this.activatedRoute.snapshot.params['id'];
    console.log(movieId);
    this.cinema = this.cinemaService.getItem(movieId);
    console.log(this.cinema );
  }

  goHome() {
    this.router.navigate(['mapa']);
  }

  onTabSelected(segmentValue: string) {
    this.segment = segmentValue;
    this.page = 1;
    this.movies = null;
    this.content.scrollToTop();
    this.loadMovies();
  }

  onNextPage() {
    this.page++;
    this.loadMovies();
  }

  onMovieDetail(id: number) {
    this.router.navigate(['movie-detail', id]);
  }

  onSearch() {
    this.router.navigate(['search']);
  }

  private async loadMovies() {
    let service;
    switch (this.segment) {
      case 'popular':  service = this.tmdb.getPopularMovies(this.page); break;
      case 'top':      service = this.tmdb.getTopMovies(this.page); break;
      case 'upcoming': service = this.tmdb.getUpcomingMovies(this.page); break;
    }
    const loadingOpts = { translucent: true, spinner: 'crescent', content: 'Carregando' };
    const loading = await this.loadingCtrl.create(loadingOpts);
    loading.present();
    service.subscribe(res => {
      if (!this.movies) { this.movies = []; }
      this.movies = this.movies.concat(res);
      loading.dismiss();
    }, err => {
      this.movies = [];
      loading.dismiss();
    });
  }

}
