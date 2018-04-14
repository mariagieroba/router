import {Component, OnInit, HostBinding} from '@angular/core';
import {Horse} from '../../horse';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {slideInDownAnimation} from '../../animations';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {GeldingsService} from '../geldings.service';

@Component({
    selector: 'app-gelding-detail',
    templateUrl: './gelding-detail.component.html',
    styleUrls: ['./gelding-detail.component.css'],
    animations: [ slideInDownAnimation ]
})
export class GeldingDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

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
        let geldingId = gelding ? gelding.id : null;
        this.router.navigate(['/geldings', {id: geldingId}]);
    }


}
