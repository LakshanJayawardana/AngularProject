import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RatingComponent } from './utilities/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { EditActorsComponent } from './actors/edit-actors/edit-actors.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MoviesFutureComponent } from './movies-future/movies-future.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupNoteComponent } from './genres/popup-note/popup-note.component';


@NgModule({
  declarations: [
    AppComponent,
    GenericListComponent,
    RatingComponent,
    HomeComponent,
    CreateActorComponent,
    IndexActorsComponent,
    EditActorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
