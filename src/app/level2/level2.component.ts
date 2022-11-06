import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component  {
  private currentPlayerIx;
  public boardContent: number[][];
  private currentWinnerIx: number;
  constructor() {
    this.boardContent = [
      [0,0,0],
      [0,0,0],
      [0,0,0],
    ];

    this.currentPlayerIx = 1;
    this.currentWinnerIx = 0;
  }
}
