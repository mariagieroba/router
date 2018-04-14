import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Horse} from '../horse';

const MARES = [
    new Horse(5, 'Aria'),
    new Horse(6, 'Jewel'),
    new Horse(7, 'Poetry'),
    new Horse(8, 'Tormenta'),
];

@Injectable()
export class MaresService {

    getMares() {
        return Observable.of(MARES);
    }

    getMare(id: number | string) {
        return this.getMares().map(mares => mares.find(mare => mare.id === +id));
    }

}
