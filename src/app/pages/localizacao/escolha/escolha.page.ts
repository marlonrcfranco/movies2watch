import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import {NgZone} from '@angular/core'
declare var google;
import { Router } from '@angular/router';
@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  name: string;
  constructor(public navCtrl: NavController,private router: Router,private ngZone:NgZone) { }

  ngOnInit() {
    setTimeout(() =>{
      console.log("Carregando mapa")
      this.loadMap();
    },100)
    
  }

  getInfoFromCinema(marker_title) {
    var info = ''
    switch (marker_title) {
      case 'Cinesystem Cinemas':
        info +=
        '<img src="../../../assets/cinesystem.jpg" alt="Cinesystem" height="100" width="200">'+
        '<h4>Praça Shopping Rio Grande</h4>'+
        '<p>Rua: Jockey Clube, 155. Vila Prado - Rio Grande/RS</p><br>'
        '<p>Telefone: (53) 3232-4923</p>'
        break;
      case 'Cinesercla Cinemas':
        info +=
        '<img src="../../../assets/cinesercla.jpg" alt="Cinesercla" height="100" width="200">'+
        '<h4>Partage Shopping Rio Grande</h4>'+
        '<p>Rua: Avenida Engenheira Lúcia Maria Balbela Chiesa, 2986. Loja 203 - Rio Grande/RS</p><br>'
        '<p>Telefone: (53) 3232-4923</p>'
        break;
      case 'Cine Dunas':
        info +=
        '<img src="../../../assets/cinedunas.jpg" alt="Cine Dunas" height="100" width="200">'+
        '<h4>Cassino</h4>'+
        '<p>Rua: Av. Rio Grande, 451. Cassino - Rio Grande/RS</p><br>'
        '<p>Telefone: (53) 3236-8119</p>'
        break;
      default:break;
    }
    return info;
  }

  addInfoWindowToMarker(marker) {
    var infoWindowContent = 
      '<div id="content">'+
      ' <h1 id="firstHeading" class="firstHeading">' + marker.title + '</h1>'+
      ' <button type="button">Acessar filmes em cartaz</button>'+
        this.getInfoFromCinema(marker.title)+
      '</div>';
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
      document.getElementById('button').addEventListener('click', () => {
        this.goEmCartaz(marker.title);
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
  
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(-32.051737, -52.148030),
      map: map,
      title: 'Cinesystem Cinemas'
    });
    this.addInfoWindowToMarker(marker);

    let marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(-32.1144534,-52.1777477),
      map: map,
      title: 'Cinesercla Cinemas'
    });
    this.addInfoWindowToMarker(marker2);

    let marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(-32.179488,-52.1689535),
      map: map,
      title: 'Cine Dunas'
    });
    this.addInfoWindowToMarker(marker3);

    // google.maps.event.addListenerOnce(map, 'idle', () => {
    //   mapEle.classList.add('show-map');
    //   this.ngZone.run(()=>{
    //     this.name = marker.title;
    //     // infoWindow.open(this.map, marker)
    //  });
    // });

  }

  goEmCartaz(cinema_name){
    switch (cinema_name) {
      case 'Cinesystem Cinemas':
        this.goEmCartazCinesystem();
        break;
      case 'Cinesercla Cinemas':
        this.goEmCartazCinesercla();
        break;
      case 'Cine Dunas':
        this.goEmCartazDunas();
        break;
      default:break;
    }
  }

  goEmCartazCinesystem(){
    this.router.navigateByUrl('cinema-detail');
  }
  goEmCartazCinesercla(){
    this.router.navigateByUrl('cinema-detail');
  }
  goEmCartazDunas(){
    this.router.navigateByUrl('cinema-detail');
  }
}
