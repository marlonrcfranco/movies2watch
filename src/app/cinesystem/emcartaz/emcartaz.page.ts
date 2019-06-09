import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviedbService } from "../../services/moviedb.service";
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from "../../models/movie";

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

  /**
   * CONSTRUTOR DA PÁGINA DE FILMES
   * @param movieService Lida com o moviedb.service que é o noss connector da API 
   */
  constructor(private movieService: MoviedbService, private router: Router) { }
 
  ngOnInit() {this.getAllActionsMovies(); this.getAllAdventureMovies(); this.getAllAnimationMovies(); this.getAllComediaMovies(); this.getAllCrimeMovies(); this.getAllDocMovies(); this.getAllDramaMovies(); this.getAllFamilyMovies(); this.getAllFantasyMovies(); this.getAllHistoryMovies(); this.getAllTerrorMovies(); this.getAllMusicMovies(); this.getAllMisteryMovies(); this.getAllRomanceMovies(); this.getAllScifiMovies(); this.getAllTvMovies(); this.getAllThrillerMovies(); this.getAllWarMovies(); this.getAllForestMovies();}
  
  goMoveDetailsPage(id: any){
    console.log("Aka");
    // this.router.navigateByUrl('/movie-details', id);
    this.router.navigate(['/movie-details'], { state: { id: id } });
  }

  getAllActionsMovies() {
    this.movieService.getActionMovies(1).then(res =>{
      this.actionMovieList = res['results'];
    })
  }

  getAllAdventureMovies() {
    this.movieService.getAdventureMovies(2).then(res =>{
      this.adventureMovieList = res['results'];
    })
  }

  getAllAnimationMovies() {
    this.movieService.getAnimationMovies(1).then(res =>{
      this.animationMovieList = res['results'];
    })
  }
//=-
  getAllComediaMovies() {
    this.movieService.getComediaMovies(1).then(res =>{
      this.comediaMovieList = res['results'];
    })
  }

  getAllCrimeMovies() {
    this.movieService.getCrimeMovies(1).then(res =>{
      this.crimeMovieList = res['results'];
    })
  }

  getAllDocMovies() {
    this.movieService.getDocMovies(1).then(res =>{
      this.docMovieList = res['results'];
    })
  }

  getAllDramaMovies() {
    this.movieService.getDramaMovies(1).then(res =>{
      this.dramaMovieList = res['results'];
    })
  }

  getAllFamilyMovies() {
    this.movieService.getFamilyMovies(1).then(res =>{
      this.familyMovieList = res['results'];
    })
  }

  getAllFantasyMovies() {
    this.movieService.getFantasyMovies(1).then(res =>{
      this.fantasyMovieList = res['results'];
    })
  }

  getAllHistoryMovies() {
    this.movieService.getHistoryMovies(1).then(res =>{
      this.historyMovieList = res['results'];
    })
  }
  getAllTerrorMovies() {
    this.movieService.getTerrorMovies(1).then(res =>{
      this.terrorMovieList = res['results'];
    })
  }

  getAllMusicMovies() {
    this.movieService.getMusicMovies(1).then(res =>{
      this.musicMovieList = res['results'];
    })
  }

  getAllMisteryMovies() {
    this.movieService.getMisteryMovies(1).then(res =>{
      this.misteryMovieList = res['results'];
    })
  }

  getAllRomanceMovies() {
    this.movieService.getRomanceMovies(1).then(res =>{
      this.romanceMovieList = res['results'];
    })
  }

  getAllScifiMovies() {
    this.movieService.getScifiMovies(1).then(res =>{
      this.scifiMovieList = res['results'];
    })
  }

  getAllTvMovies() {
    this.movieService.getTvMovies(1).then(res =>{
      this.tvMovieList = res['results'];
    })
  }

  getAllThrillerMovies() {
    this.movieService.getThrillerMovies(1).then(res =>{
      this.thrillerMovieList = res['results'];
    })
  }

  getAllWarMovies() {
    this.movieService.getWarMovies(1).then(res =>{
      this.warMovieList = res['results'];
    })
  }

  getAllForestMovies() {
    this.movieService.getFaroestMovies(1).then(res =>{
      this.forestMovieList = res['results'];
    })
  }


}
