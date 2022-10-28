import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  @Input() drinks = "tea";
  @Output() newDrinkEvent = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit(): void { }

  addNewDrink(value: string){
    console.log("Drink to be served :",value)
    this.newDrinkEvent.emit(value);

  }
}
