import {Component, OnInit, HostBinding} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {RidersService} from '../riders.service';
import {slideInDownAnimation} from '../../animations';
import {Rider} from '../../rider';

@Component({
    selector: 'app-rider-detail',
    templateUrl: './rider-detail.component.html',
    styleUrls: ['./rider-detail.component.css'],
    animations: [ slideInDownAnimation ]
})
export class RiderDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    rider$: Observable<Rider>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: RidersService
    ) {
    }

    ngOnInit() {
        this.rider$ = this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.service.getRider(params.get('id')));
    }

    gotoRiders(rider: Rider) {
        const riderId = rider ? rider.id : null;
        this.router.navigate(['/riders', {id: riderId}]);
    }


}
