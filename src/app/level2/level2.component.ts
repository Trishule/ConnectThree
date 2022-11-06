import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component  {


  public testField = 'X';

  public getTestField(): string {
    return 'O'
  }

  public getTestClass(): string {
    return 'occupied-O';
  }

  restart() {
      console.log('hello world!');
    }


}
