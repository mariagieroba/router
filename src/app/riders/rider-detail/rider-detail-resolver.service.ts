import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

import {RidersService} from '../riders.service';
import {Rider} from '../../rider';

@Injectable()
export class RiderDetailResolver implements Resolve<Rider> {
    constructor(private rs: RidersService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Rider> {
        let id = route.paramMap.get('id');

        return this.rs.getRider(id).take(1).map(rider => {
            if (rider) {
                return rider;
            } else {
                this.router.navigate(['/riders']);
                return null;
            }
        });
    }
}
