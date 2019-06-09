import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemasPage } from './cinemas.page';

const routes: Routes = [
  {
    path: 'cinemas',
    component: CinemasPage,
    children: [
      {
        path: 'lista',
        children: [
          {
            path: '',
            loadChildren: '../lista/lista.module#ListaPageModule'
          }
        ]
      },
      {
        path: 'intro',
        children: [
          {
            path: '',
            loadChildren: '../intro/intro.module#IntroPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/cinemas/lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/cinemas/lista',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CinemasPageRoutingModule {}
