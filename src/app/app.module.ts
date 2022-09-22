import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { TrainerPageComponent } from './trainer/trainer-page/trainer-page.component';
import { CollectedPokemonListComponent } from './trainer/collected-pokemon-list/collected-pokemon-list.component';
import { CollectedPokemonListItemComponent } from './trainer/collected-pokemon-list-item/collected-pokemon-list-item.component';
import { LogoutComponent } from './trainer/logout/logout.component';
import { CataloguePageComponent } from './catalogue/catalogue-page/catalogue-page.component';
import { PokemonListComponent } from './catalogue/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './catalogue/pokemon-card/pokemon-card.component';
import { CatalogueDetailedPageComponent } from './catalogue-detailed/catalogue-detailed-page/catalogue-detailed-page.component';
import { PokemonDisplayComponent } from './catalogue-detailed/pokemon-display/pokemon-display.component';
import { HeaderComponent } from './header/header/header.component';
import { UserLogoComponent } from './header/user-logo/user-logo.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    TrainerPageComponent,
    CollectedPokemonListComponent,
    CollectedPokemonListItemComponent,
    LogoutComponent,
    CataloguePageComponent,
    PokemonListComponent,
    PokemonCardComponent,
    CatalogueDetailedPageComponent,
    PokemonDisplayComponent,
    HeaderComponent,
    UserLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
