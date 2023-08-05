import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <div class="my-4">
      <button (click)="increaseBy(+1)" class="btn-blue btn btn:focus btn:hover">+1</button>
      <button (click)="resetValue()" class="btn-blue btn btn:focus btn:hover">Reset</button>
      <button (click)="increaseBy(-1)" class="btn-blue btn btn:focus btn:hover">-1</button>
    </div>
  `,
})

export class CounterComponent  {
  public counter: number = 10;

  increaseBy(value:number):void {
    this.counter += value;
  }

  resetValue(): void{
    this.counter = 10;
  }
}
