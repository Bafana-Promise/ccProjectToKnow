import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentDrink = "Coffee";
  drinks = ['Milk'];
  result: any = []
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.result = sessionStorage.getItem('drinks')
      console.log(this.result)
    }, 2000);
    // if(this.result){
    //   sessionStorage.clear();
    // }
  }

  addDrink(addNewDrink: string) {
    this.drinks.push(addNewDrink)
    // sessionStorage.setItem('drinks',this.drinks)
    // sessionStorage.setItem('drinks', 'this.drinks');
    sessionStorage.setItem('drinks', JSON.stringify(this.drinks))
    console.log("Drink :", this.drinks)
  }

}
