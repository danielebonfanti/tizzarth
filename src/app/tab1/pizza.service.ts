import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { Pizzeria } from '../models/pizzeria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PizzaService {

    constructor(private http: HttpClient) {}

    retrievePizzas() {
        return this.http.get<Pizza[]>('https://localhost:5001/api/Pizzas');
    }

    retrievePizzerias(): Observable<Pizzeria[]> {
        return this.http.get<Pizzeria[]>('https://localhost:5001/api/Pizzerias');
    }
}