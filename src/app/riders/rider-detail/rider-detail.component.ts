import {Component, OnInit, HostBinding} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {RidersService} from '../riders.service';
import {slideInDownAnimation} from '../../animations';
import {Rider} from '../../rider';
import {DialogService} from '../../dialog.service';

@Component({
    selector: 'app-rider-detail',
    templateUrl: './rider-detail.component.html',
    styleUrls: ['./rider-detail.component.css'],
    animations: [slideInDownAnimation]
})
export class RiderDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    editName: string;
    rider: Rider;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public dialogService: DialogService
    ) {
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: { rider: Rider }) => {
                this.editName = data.rider.name;
                this.rider = data.rider;
            });
    }

    cancel() {
        this.gotoRiders();
    }

    save() {
        this.rider.name = this.editName;
        this.gotoRiders();
    }

    canDeactivate(): Observable<boolean> | boolean {
        if (!this.rider || this.rider.name === this.editName) {
            return true;
        }
        return this.dialogService.confirm('Discard changes?');

    }

    gotoRiders() {
        const riderId = this.rider ? this.rider.id : null;
        this.router.navigate(['/riders', {id: riderId}]);
    }


}
