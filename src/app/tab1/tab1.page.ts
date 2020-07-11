import { Component } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from './pizza.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pizzas: Pizza[];

  constructor(private readonly pizzaService: PizzaService) {
    this.retrievePizzas();
  }

  retrievePizzas() {
    this.pizzas = this.pizzaService.retrievePizzas();
  }

  addPizza() {
    console.log('Aggiungiamo una nuova pizza!')
  }
}
