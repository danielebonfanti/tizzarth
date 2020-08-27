import { Component, Input } from '@angular/core';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  @Input() pizzas: Pizza[];

  pizzasToShow: Pizza[];

  constructor() { }

  search(parameter) {
    this.pizzas.forEach(pizza => {
      if (pizza.name === parameter) {
        this.pizzasToShow.push(pizza);
      } else if (pizza.ingredients.includes(parameter)) {
        this.pizzasToShow.push(pizza);
      }
    });
  }
}
