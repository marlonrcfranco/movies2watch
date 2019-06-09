import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-lista',
  templateUrl: 'lista.page.html',
  styleUrls: ['lista.page.scss']
})
export class ListaPage {

  constructor(private router: Router,public navCtrl: NavController) {}
  
  goCinesystemPage() {
    this.router.navigateByUrl('/homepage');
  }	
  goCineserclaPage() {
    this.router.navigateByUrl('/cshomepage');
  }	
  goCinedunasPage() {
    this.router.navigateByUrl('/cdhomepage');
  }	
  pop(){
    this.router.navigateByUrl('/intro');
  }
}
