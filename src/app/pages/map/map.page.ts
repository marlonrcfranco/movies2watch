import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import {NgZone} from '@angular/core'
declare var google;
import { Router } from '@angular/router';
import { Cinema } from '../../models/cinema';
import { CinemaService } from '../../services/cinema-service';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  name: string;
  cinemas: Cinema[];
  constructor(public navCtrl: NavController,private router: Router,private ngZone:NgZone, private cinemaService: CinemaService) { 
  }

  ngOnInit() {
    setTimeout(() =>{
      console.log("Carregando mapa")
      this.cinemas = this.cinemaService.getAll();
      this.loadMap();
    },100)
    
  }

  addInfoWindowToMarker(marker,cinema) {
    var infoWindowContent = 
      '<style>'+
      '.button {'+
      '  background-color: #4CAF50; /* Green */'+
      '  border: none;'+
      '  color: white;'+
      '  text-align: center;'+
      '  text-decoration: none;'+
      '  display: inline-block;'+
      '  font-size: 16px;'+
      '  margin: 4px 2px;'+
      '  cursor: pointer;'+
      '}'+
      '.button1 {padding: 10px 24px;}'+
      '</style>'+
      '<div id="content">'+
      ' <h1 id="firstHeading" class="firstHeading">' + marker.title + '</h1>'+
      ' <button type="button" id="botao" class="button1">Acessar filmes em cartaz</button>'+
      // ' <button type="button" id="botao" style="background-color: #4CAF50;border: none;color: white; padding: 15px 32px; text-align: center;text-decoration: none; display: inline-block; font-size: 17px; margin: 4px 2px;">Acessar filmes em cartaz</button>'+
        // this.getInfoFromCinema(marker.title)+
      '<div (click)="goEmCartaz(marker.title)">'+
      ' <img src="'+cinema.img+'" alt="'+cinema.nome+'" height="100" width="200">'+
      '</div>'+
      '<h4>'+cinema.loc+'</h4>'+
      '<p>'+cinema.end+'<br>Telefone: '+cinema.tel+'</p>'
      '</div>';
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
      document.getElementById('botao').addEventListener('click', () => {
        this.goEmCartaz(marker.id);
      });
    });
    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  loadMap(){
    let mapEle = document.getElementById('map');
    let map = new google.maps.Map(mapEle, {
      center: new google.maps.LatLng(-32.051737, -52.148030),
      zoom: 10
    });
  
    this.cinemas.forEach(cinema => {
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(cinema.lat, cinema.long),
        map: map,
        id: cinema.id,
        title: cinema.nome
      });
      this.addInfoWindowToMarker(marker,cinema);
    });

  }

  goEmCartaz(cinema_id){
    this.router.navigate(['cinema-detail', cinema_id]);
  }

}
