import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Horse} from '../horse';
import {GeldingsService} from './geldings.service';

@Component({
    templateUrl: './geldings.component.html',
    styleUrls: ['./geldings.component.css']
})
export class GeldingsComponent {
    geldings$: Observable<Horse[]>;

    private selectedId: number;

    constructor(
        private service: GeldingsService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.geldings$ = this.route.paramMap
            .switchMap((params: ParamMap) => {
                this.selectedId = +params.get('id');
                return this.service.getGeldings();
            });
    }

}
