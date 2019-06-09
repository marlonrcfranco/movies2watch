import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: './cinemas/cinemas.module#CinemasPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lista', loadChildren: './lista/lista.module#ListaPageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'homepage', loadChildren: './cinesystem/homepage/homepage.module#HomepagePageModule' },
  { path: 'emcartaz', loadChildren: './cinesystem/emcartaz/emcartaz.module#EmcartazPageModule' },
  { path: 'movie-details', loadChildren: './cinesystem/movie-details/movie-details.module#MovieDetailsPageModule' },
  { path: 'cshomepage', loadChildren: './cinesercla/homepage/homepage.module#HomepagePageModule' },
  { path: 'csemcartaz', loadChildren: './cinesercla/emcartaz/emcartaz.module#EmcartazPageModule' },
  { path: 'csmovie-details', loadChildren: './cinesercla/movie-details/movie-details.module#MovieDetailsPageModule' },
  { path: 'cdhomepage', loadChildren: './cinedunas/homepage/homepage.module#HomepagePageModule' },
  { path: 'cdemcartaz', loadChildren: './cinedunas/emcartaz/emcartaz.module#EmcartazPageModule' },
  { path: 'cdmovie-details', loadChildren: './cinedunas/movie-details/movie-details.module#MovieDetailsPageModule' },
  { path: 'escolha', loadChildren: './localizacao/escolha/escolha.module#EscolhaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
