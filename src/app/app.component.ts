import { Component } from '@angular/core';
import {earn} from "./model1"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dash';
  data:Array<earn>=[
    {
      sub:"Earnings-monthly",
      num:"$40000",
      side:"blue"

    },
    {
      sub:"Earnings-Annually",
      num:"$215000",
      side:"green"

    }
    ,{
      sub:"tasks",
      num:"50%",
      side:"lightgreen"


    },
    {
      sub:"Pending requests",
      num:"18",
      side:"yellow"


    }
  ]
}
