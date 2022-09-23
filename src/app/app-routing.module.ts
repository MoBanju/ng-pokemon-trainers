import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueDetailedPageComponent } from './catalogue-detailed/catalogue-detailed-page/catalogue-detailed-page.component';
import { CataloguePageComponent } from './catalogue/catalogue-page/catalogue-page.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { TrainerPageComponent } from './trainer/trainer-page/trainer-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'trainer',
    component: TrainerPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'catalogue',
    component: CataloguePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'catalogue/:id',
    component: CatalogueDetailedPageComponent,
    canActivate: [AuthGuard]
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
