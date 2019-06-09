export const AppRoutes = [
  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'home', loadChildren: './pages/localizacao/escolha/escolha.module#EscolhaPageModule' },
  { path: 'movie-detail/:id', loadChildren: './pages/movie-detail/movie-detail.module#MovieDetailPageModule' },
  { path: 'person-detail/:id', loadChildren: './pages/person-detail/person-detail.module#PersonDetailPageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
 
  { path: 'cinema-detail', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'mapa', loadChildren: './pages/localizacao/escolha/escolha.module#EscolhaPageModule' },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
