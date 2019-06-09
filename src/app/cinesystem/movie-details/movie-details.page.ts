import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie'
import { Cast } from '../../models/cast';
import { MoviedbService } from "../../services/moviedb.service";
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  sliderConfig = {
    slidesPerView: 5,
    spaceBetween: 4,
    centeredSlides: false
  };

  sliderThree: any;
  private movieID: string = "";
  movie: Movie;
  castList: Cast[] = [];

  constructor(private movieService: MoviedbService,private router: Router,private navCtrl: NavController) { 
    this.movieID = this.router.getCurrentNavigation().extras.state.id;
  }

  ngOnInit() {
    this.setMovieDetail();
    this.getMovieCast();
  }

  navigateBack() {
    this.navCtrl.pop();
  }

  setMovieDetail() {
    this.movieService.getMovieDetail(this.movieID).subscribe(conteudo => {
      this.movie = conteudo;
    });
  }

  getMovieCast() {
    this.movieService.getMovieCast(this.movieID).subscribe(d => {
      let tmpCastList = d;
      this.castList = tmpCastList.length > 15 ? tmpCastList.slice(0, 15) : tmpCastList;
    });
  }

}
