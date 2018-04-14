import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Horse} from '../horse';

const GELDINGS = [
    new Horse(1, 'Magennis'),
    new Horse(2, 'Mr Potts'),
    new Horse(3, 'Calvinio II'),
    new Horse(4, 'Lebowski'),
];


@Injectable()
export class GeldingsService {
    getGeldings() {
        return Observable.of(GELDINGS);
    }

    getGelding(id: number | string) {
        return this.getGeldings().map(geldings => geldings.find(gelding => gelding.id === +id));
    }
}
