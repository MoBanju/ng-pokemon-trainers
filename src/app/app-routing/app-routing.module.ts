import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueDetailedPageComponent } from '../catalogue-detailed/catalogue-detailed-page/catalogue-detailed-page.component';
import { CataloguePageComponent } from '../catalogue/catalogue-page/catalogue-page.component';
import { LoginPageComponent } from '../login/login-page/login-page.component';
import { TrainerPageComponent } from '../trainer/trainer-page/trainer-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'trainer',
    component: TrainerPageComponent,
  },
  {
    path: 'catalogue',
    component: CataloguePageComponent,
  },
  {
    path: 'catalogue/:id',
    component: CatalogueDetailedPageComponent,
  },
  {
    path: '*',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
