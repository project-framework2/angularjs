import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CarouselComponent } from './carousel/carousel.component';


const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'carrousel',component:CarrouselComponent},
  {path:'formulaire',component:FormulaireComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes),NgbModule],
  declarations: [ AppComponent, HelloComponent, HomeComponent,CarrouselComponent, FormulaireComponent, CarouselComponent, CarrouselComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
