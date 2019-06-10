import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../models/movie';
import { LoadingController, Content, PopoverController } from '@ionic/angular';
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
    public cinemaService: CinemaService,
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

  trataGenero(segmentValue: any) {
    this.segment = segmentValue.detail.value;
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
    console.log('segment: ')
    console.log(this.segment)
    switch (this.segment) {
      case 'upcoming': service = this.tmdb.getUpcomingMovies(this.page); console.log('upcoming'); break;
      case 'acao': service = this.tmdb.getActionMovies(this.page); console.log('acao'); break;
      case 'aventura': service = this.tmdb.getAdventureMovies(this.page); console.log('aventura'); break;
      case 'romance': service = this.tmdb.getRomanceMovies(this.page); console.log('romance'); break;
      case 'suspense': service = this.tmdb.getThrillerMovies(this.page); console.log('suspense'); break;
      case 'terror': service = this.tmdb.getTerrorMovies(this.page); console.log('terror'); break;
      case 'musical': service = this.tmdb.getMusicMovies(this.page); console.log('musical'); break;
      case 'animacao': service = this.tmdb.getAnimationMovies(this.page); console.log('animacao'); break;
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
