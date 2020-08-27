import { Component } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from './pizza.service';
import { Pizzeria } from '../models/pizzeria';
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../search/search.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pizzas: Pizza[];
  pizzerias: Pizzeria[];
  selectedPizzeria: Pizzeria = new Pizzeria();

  constructor(
    private readonly pizzaService: PizzaService,
    public modalController: ModalController
  ) {
    this.retrievePizzerias();
  }

  retrievePizzerias() {
    this.pizzaService.retrievePizzerias().subscribe(response => this.pizzerias = response);
    if (this.pizzerias) {
      this.selectedPizzeria = this.pizzerias[0];
      this.pizzas = this.pizzerias[0].pizzas;
    }
  }

  selectPizzeria(pizzeria: Pizzeria) {
    this.selectedPizzeria = pizzeria;
  }

  async openSearch() {
    const modal = await this.modalController.create({
      component: SearchPage,
      componentProps: {
        pizzas: this.selectedPizzeria.pizzas
      }
    });
    return await modal.present();
  }

}
