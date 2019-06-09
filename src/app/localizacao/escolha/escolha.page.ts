import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  constructor(public navCtrl: NavController,private router: Router) { }

  ngOnInit() {
    setTimeout(() =>{
      console.log("Cahmou")
      this.loadMap();
    },100)
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

      let marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(-32.1144534,-52.1777477),
        map: map,
        title: 'Cinesercla Cinemas'
      });

      let marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-32.179488,-52.1689535),
        map: map,
        title: 'Cine Dunas'
      });

    google.maps.event.addListenerOnce(map, 'idle', () => {
      mapEle.classList.add('show-map');
    });

  }

  goEmCartazCinesystem(){
    this.router.navigateByUrl('/emcartaz');
  }
  goEmCartazCinesercla(){
    this.router.navigateByUrl('/csemcartaz');
  }
  goEmCartazDunas(){
    this.router.navigateByUrl('/cdemcartaz');
  }
}
