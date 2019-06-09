import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviedbService } from '../../services/moviedb.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from "../../models/movie";
import { Cast } from "../../models/cast";

@Component({
  selector: 'app-emcartaz',
  templateUrl: './emcartaz.page.html',
  styleUrls: ['./emcartaz.page.scss'],
   
})
export class EmcartazPage implements OnInit {
  sliderConfig = {
    slidesPerView: 5,
    spaceBetween: 4,
    centeredSlides: false
  };

  sliderThree: any;

  actionMovieList: Movie[] = [];
  adventureMovieList: Movie[] = [];
  animationMovieList: Movie[] = [];
  comediaMovieList: Movie[] = [];
  crimeMovieList: Movie[] = [];
  docMovieList: Movie[] = [];
  dramaMovieList: Movie[] = [];
  familyMovieList: Movie[] = [];
  fantasyMovieList: Movie[] = [];
  historyMovieList: Movie[] = [];
  terrorMovieList: Movie[] = [];
  musicMovieList: Movie[] = [];
  misteryMovieList: Movie[] = [];
  romanceMovieList: Movie[] = [];
  scifiMovieList: Movie[] = [];
  tvMovieList: Movie[] = [];
  thrillerMovieList: Movie[] = [];
  warMovieList: Movie[] = [];
  forestMovieList: Movie[] = [];
  castList: Cast[] = [];

  /**
   * CONSTRUTOR DA PÁGINA DE FILMES
   * @param movieService Lida com o moviedb.service que é o nosso connector da API 
   */
  constructor(private movieService: MoviedbService, private router: Router) { }
 
  ngOnInit() {this.getAllActionsMovies(); this.getAllAdventureMovies(); this.getAllAnimationMovies(); this.getAllComediaMovies(); this.getAllCrimeMovies(); this.getAllDocMovies(); this.getAllDramaMovies(); this.getAllFamilyMovies(); this.getAllFantasyMovies(); this.getAllHistoryMovies(); this.getAllTerrorMovies(); this.getAllMusicMovies(); this.getAllMisteryMovies(); this.getAllRomanceMovies(); this.getAllScifiMovies(); this.getAllTvMovies(); this.getAllThrillerMovies(); this.getAllWarMovies(); this.getAllForestMovies();}
  
  goMoveDetailsPage(id: any){
    console.log("Aka");
    // this.router.navigateByUrl('/movie-details', id);
    this.router.navigate(['/cdmovie-details'], { state: { id: id } });
  }



  getAllActionsMovies() {
    this.movieService.getActionMovies(3).then(res =>{
      this.actionMovieList = res['results'];
      console.log(this.actionMovieList);
    })
  }

  getAllAdventureMovies() {
    this.movieService.getAdventureMovies(4).then(res =>{
      this.adventureMovieList = res['results'];
    })
  }

  getAllAnimationMovies() {
    this.movieService.getAnimationMovies(3).then(res =>{
      this.animationMovieList = res['results'];
    })
  }
//=-
  getAllComediaMovies() {
    this.movieService.getComediaMovies(3).then(res =>{
      this.comediaMovieList = res['results'];
    })
  }

  getAllCrimeMovies() {
    this.movieService.getCrimeMovies(3).then(res =>{
      this.crimeMovieList = res['results'];
    })
  }

  getAllDocMovies() {
    this.movieService.getDocMovies(3).then(res =>{
      this.docMovieList = res['results'];
    })
  }

  getAllDramaMovies() {
    this.movieService.getDramaMovies(3).then(res =>{
      this.dramaMovieList = res['results'];
    })
  }

  getAllFamilyMovies() {
    this.movieService.getFamilyMovies(3).then(res =>{
      this.familyMovieList = res['results'];
    })
  }

  getAllFantasyMovies() {
    this.movieService.getFantasyMovies(3).then(res =>{
      this.fantasyMovieList = res['results'];
    })
  }

  getAllHistoryMovies() {
    this.movieService.getHistoryMovies(3).then(res =>{
      this.historyMovieList = res['results'];
    })
  }
  getAllTerrorMovies() {
    this.movieService.getTerrorMovies(3).then(res =>{
      this.terrorMovieList = res['results'];
    })
  }

  getAllMusicMovies() {
    this.movieService.getMusicMovies(3).then(res =>{
      this.musicMovieList = res['results'];
    })
  }

  getAllMisteryMovies() {
    this.movieService.getMisteryMovies(3).then(res =>{
      this.misteryMovieList = res['results'];
    })
  }

  getAllRomanceMovies() {
    this.movieService.getRomanceMovies(3).then(res =>{
      this.romanceMovieList = res['results'];
    })
  }

  getAllScifiMovies() {
    this.movieService.getScifiMovies(3).then(res =>{
      this.scifiMovieList = res['results'];
    })
  }

  getAllTvMovies() {
    this.movieService.getTvMovies(3).then(res =>{
      this.tvMovieList = res['results'];
    })
  }

  getAllThrillerMovies() {
    this.movieService.getThrillerMovies(3).then(res =>{
      this.thrillerMovieList = res['results'];
    })
  }

  getAllWarMovies() {
    this.movieService.getWarMovies(3).then(res =>{
      this.warMovieList = res['results'];
    })
  }

  getAllForestMovies() {
    this.movieService.getFaroestMovies(3).then(res =>{
      this.forestMovieList = res['results'];
    })
  }

 
}
