import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { Pizzeria } from '../models/pizzeria';

@Injectable()
export class PizzaService {

    constructor() {}

    retrievePizzas() {
        return new Array<Pizza>();
    }

    retrievePizzerias() {
        return new Array<Pizzeria>();
    }
}