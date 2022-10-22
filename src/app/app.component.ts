import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'childNparent';

  currentDrink = "Coffee";
  drinks = [ 'Milk'];
  result: any = []

  ngOnInit(): void {
    setTimeout(() => {
      this.result = sessionStorage.getItem('drinks')
      console.log(this.result)
    }, 2000);
    // if(this.result){
    //   sessionStorage.clear();
    // }
  }

  addDrink(addNewDrink: string){
      this.drinks.push(addNewDrink)
      // sessionStorage.setItem('drinks',this.drinks)
      // sessionStorage.setItem('drinks', 'this.drinks');
      sessionStorage.setItem('drinks', JSON.stringify(this.drinks))
      console.log("Drink :", this.drinks)
  }
}
