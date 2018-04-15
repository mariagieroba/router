import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-manager-dashboard',
    templateUrl: './manager-dashboard.component.html',
    styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {

    sessionId: Observable<string>;
    token: Observable<string>;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        // Capture the session ID if available
        this.sessionId = this.route
            .queryParamMap
            .map(params => params.get('session_id') || 'None');

        // Capture the fragment if available
        this.token = this.route
            .fragment
            .map(fragment => fragment || 'None');
    }

}
