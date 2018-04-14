import { Component, OnInit, Input } from '@angular/core';
import { Horse } from '../../horse';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {StallionsService} from '../stallions.service';

@Component({
    selector: 'app-stallion-detail',
    templateUrl: './stallion-detail.component.html',
    styleUrls: ['./stallion-detail.component.css']
})
export class StallionDetailComponent implements OnInit {

    stallion$: Observable<Horse>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: StallionsService
    ) {
    }

    ngOnInit() {
        this.stallion$ = this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.service.getStallion(params.get('id')));
    }

    gotoStallions(stallion: Horse) {
        const stallionId = stallion ? stallion.id : null;
        this.router.navigate(['/stallions', { id: stallionId, foo: 'foo' }]);
    }


}
