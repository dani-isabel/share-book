import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() imageUrl:string;
  @Input() name:string;
  @Input() description:string;
  @Input() author:string;

  constructor() { }

  ngOnInit(): void {
  }

}
