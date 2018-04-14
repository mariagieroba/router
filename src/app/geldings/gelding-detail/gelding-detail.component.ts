import {Component, OnInit, Input} from '@angular/core';
import {Horse} from '../../horse';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {GeldingsService} from '../geldings.service';

@Component({
    selector: 'app-gelding-detail',
    templateUrl: './gelding-detail.component.html',
    styleUrls: ['./gelding-detail.component.css']
})
export class GeldingDetailComponent implements OnInit {

    gelding$: Observable<Horse>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: GeldingsService
    ) {
    }

    ngOnInit() {
        this.gelding$ = this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.service.getGelding(params.get('id')));
    }

        gotoGeldings(gelding: Horse) {
            const geldingId = gelding ? gelding.id : null;
            this.router.navigate(['/geldings', { id: geldingId, foo: 'foo' }]);
        }


}
