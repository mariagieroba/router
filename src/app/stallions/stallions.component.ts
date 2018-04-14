import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Horse} from '../horse';
import {StallionsService} from './stallions.service';

@Component({
    templateUrl: './stallions.component.html',
    styleUrls: ['./stallions.component.css']
})
export class StallionsComponent implements OnInit {

    stallions$: Observable<Horse[]>;

    private selectedId: number;

    constructor(
        private service: StallionsService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.stallions$ = this.route.paramMap
            .switchMap((params: ParamMap) => {
                this.selectedId = +params.get('id');
                return this.service.getStallions();
            });
    }

}
