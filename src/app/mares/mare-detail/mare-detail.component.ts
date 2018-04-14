import {Component, OnInit, Input, HostBinding} from '@angular/core';
import { Horse } from '../../horse';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {MaresService} from '../mares.service';
import {slideInDownAnimation} from '../../animations';

@Component({
    selector: 'app-mare-detail',
    templateUrl: './mare-detail.component.html',
    styleUrls: ['./mare-detail.component.css'],
    animations: [ slideInDownAnimation ]
})
export class MareDetailComponent implements OnInit {

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    mare$: Observable<Horse>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MaresService
    ) {
    }

    ngOnInit() {
        this.mare$ = this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.service.getMare(params.get('id')));
    }

    gotoMares(mare: Horse) {
        const mareId = mare ? mare.id : null;
        this.router.navigate(['/mares', { id: mareId }]);
    }

}
