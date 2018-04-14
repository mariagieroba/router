import { Component, OnInit, Input } from '@angular/core';
import { Horse } from '../../horse';

@Component({
    selector: 'app-mare-detail',
    templateUrl: './mare-detail.component.html',
    styleUrls: ['./mare-detail.component.css']
})
export class MareDetailComponent implements OnInit {

    @Input() mare: Horse;

    constructor() {
    }

    ngOnInit() {
    }

}
