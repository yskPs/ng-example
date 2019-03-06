import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animation-example',
  templateUrl: './animation-example.component.html',
  styleUrls: ['./animation-example.component.css'],
  animations: [
    trigger('fontSize', [
      state('small', style({
        'font-size': 'small'
      })),
      state('medium', style({
        'font-size': 'medium'
      })),
      state('large', style({
        'font-size': 'large'
      })),
      transition('small => medium', animate('1s ease-in')),
      transition('medium => large', animate('1s ease-in')),
      transition('small => large', animate('1s ease-in')),
      transition('large => medium', animate('1s ease-out')),
      transition('medium => small', animate('1s ease-out')),
      transition('large => small', animate('1s ease-out')),
    ]),
    trigger('cardSize', [
      state('large', style({
        'width': '100%',
        'height': '100%'
      })),
      state('medium', style({
        'width': '75%',
        'height': '75%'
      })),
      state('small', style({
        'width': '50%',
        'height': '50%'
      })),
      transition('large => medium', animate('1s')),
      transition('medium => small', animate('1s')),
      transition('small => medium', animate('1s')),
      transition('medium => large', animate('1s')),
      transition('large => small', animate('1s')),
      transition('small => large', animate('1s')),
      
    ]),
  ]
})
export class AnimationExampleComponent implements OnInit {

  fontSize: string = 'medium';
  cardSize: string = 'medium';
  constructor() { }

  ngOnInit() {
  }

  setFontSize(str: string) {
    this.fontSize = str;
  }

  setCardSize(str: string){
    this.cardSize = str;
  }
}
