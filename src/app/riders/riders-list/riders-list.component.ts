import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {Rider} from '../../rider';
import {RidersService} from '../riders.service';

@Component({
    templateUrl: './riders-list.component.html',
    styleUrls: ['./riders-list.component.css']
})
export class RidersListComponent implements OnInit {

    riders$: Observable<Rider[]>;
    selectedId: number;

    constructor(
        private service: RidersService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.riders$ = this.route.paramMap
            .switchMap((params: ParamMap) => {
                this.selectedId = +params.get('id');
                return this.service.getRiders();
            });
    }

}
