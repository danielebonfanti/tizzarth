import { Component } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from './pizza.service';
import { Pizzeria } from '../models/pizzeria';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pizzas: Pizza[];
  pizzerias: Pizzeria[];
  selectedPizzeria: Pizzeria;

  constructor(private readonly pizzaService: PizzaService) {
    this.retrievePizzerias();
    this.retrievePizzas();
  }

  retrievePizzerias() {
    this.pizzaService.retrievePizzerias().subscribe(response => this.pizzerias = response);
  }

  retrievePizzas() {
    this.pizzaService.retrievePizzas().subscribe(response => this.pizzas = response);
  }

  selectPizzeria(pizzeria: Pizzeria) {
    this.selectedPizzeria = pizzeria;
  }

  // addPizza() {
  //   console.log('Aggiungiamo una nuova pizza!');
  // }

}
