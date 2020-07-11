import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';

@Injectable()
export class PizzaService {

    constructor() {}

    retrievePizzas() {
        return new Array<Pizza>();
    }
}