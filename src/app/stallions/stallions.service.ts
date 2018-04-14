import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Horse} from '../horse';

const STALLIONS = [
    new Horse(9, 'Cactus'),
    new Horse(10, 'Dan'),
    new Horse(11, 'Fox trot'),
    new Horse(12, 'Maverick'),
];

@Injectable()
export class StallionsService {

    getStallions() {
        return Observable.of(STALLIONS);
    }

    getStallion(id: number | string) {
        return this.getStallions().map(stallions => stallions.find(stallion => stallion.id === +id));
    }

}
