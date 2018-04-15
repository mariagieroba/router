import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Rider} from '../rider';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

const RIDERS = [
    new Rider (1, 'Sara'),
    new Rider (2, 'Tom'),
    new Rider (3, 'Lara'),
    new Rider (4, 'Alex'),
    new Rider (5, 'Phillip'),
    new Rider (6, 'Sam'),
    new Rider (7, 'Ana'),
    new Rider (8, 'Greg')
]

@Injectable()
export class RidersService {
    static nextRiderId = 100;
    private riders$: BehaviorSubject<Rider[]> = new BehaviorSubject<Rider[]>(RIDERS);

    getRiders() {
        return this.riders$;
    }

    getRider(id: number | string) {
        return this.getRiders().map(riders => riders.find(rider => rider.id === +id));
    }

}
