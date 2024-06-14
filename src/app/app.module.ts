import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
import { MovieServiceService } from './services/movie-service.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MaterialsModule } from './module/material.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCardComponent,
    MovieFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MaterialsModule
  ],
  providers: [MovieServiceService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
