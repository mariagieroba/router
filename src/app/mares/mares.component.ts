import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Horse} from '../horse';
import {MaresService} from './mares.service';



@Component({
    templateUrl: './mares.component.html',
    styleUrls: ['./mares.component.css']
})
export class MaresComponent implements OnInit {

    mares$: Observable<Horse[]>;

    private selectedId: number;

    constructor(
        private service: MaresService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.mares$ = this.route.paramMap
            .switchMap((params: ParamMap) => {
                this.selectedId = +params.get('id');
                return this.service.getMares();
            });
    }

}
