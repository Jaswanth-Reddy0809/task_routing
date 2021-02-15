import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { BordersComponent } from './borders/borders.component';
import {C5Component} from './c5/c5.component'
import {C6Component} from './c6/c6.component'
import { C7Component } from './c7/c7.component';
import { CardsComponent } from './cards/cards.component';
import { ColorsComponent } from './colors/colors.component';

const routes: Routes = [
  {
    path:'components',
    component:C5Component
  },
  {path:'utilities',
  component:C6Component
},
  {
    path:"buttons",
    component:C7Component
  }
  ,
  {
   path:"cards",
   component:CardsComponent
  },
  {
path:"colors",
component:ColorsComponent
  },
  {
    path:"animations",
    component:AnimationsComponent
  },
  {
    path:"borders",
    component:BordersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
