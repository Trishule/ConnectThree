import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component  {
  private currentPlayerIx!: number;
  public boardContent!: number[][];
  private currentWinnerIx!: number;
  private playerNames: string[];
  constructor() {
    this.playerNames = ['','X','O'];
    this.onRestart();

  }

  public getPlayerName(col: number, row:number): string {
    return this.playerNames[this.boardContent[row][col]];
  }

  public getStyle(col: number, row: number): string {
    if(this.boardContent[row][col] !== 0) {
    return `occupied-${this.getPlayerName(col,row)}`
    }

    return '';
  }

  public set(col: number, row: number): void {
    if (this.currentWinnerIx === 0 && this.boardContent[row][col] === 0) {
      this.boardContent[row][col] = this.currentPlayerIx;
      this.currentPlayerIx = this.currentPlayerIx === 1 ? 2 : 1;


    }


  }

  public onRestart(): void {
    this.boardContent = [
      [0,0,0],
      [0,0,0],
      [0,0,0],
    ];

    this.currentPlayerIx = 1;
    this.currentWinnerIx = 0;
  }
}
