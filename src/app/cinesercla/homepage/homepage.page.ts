import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goEmCartazPage(){
    console.log("entrou");
    this.router.navigateByUrl('/csemcartaz');
  }
  goToLocalizacao(){
    this.router.navigateByUrl('/escolha');
  }

}
