import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorsComponent } from './actors/edit-actors/edit-actors.component';

const routes: Routes = [
  {path : '', component:HomeComponent},



  {path : 'actors', component:IndexActorsComponent},
  {path : 'actors/create', component:CreateActorComponent},
  {path : 'actors/edit/:id', component:EditActorsComponent},

  {path : '**', redirectTo: ''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
