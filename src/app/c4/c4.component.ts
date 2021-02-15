import { Component, Input, OnInit } from '@angular/core';
import { earn } from '../model1';
@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {
  @Input('earn') Earn:Partial<earn>={}
  constructor() { }

  ngOnInit(): void {
  }

}
