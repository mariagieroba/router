import { Component, OnInit, Input } from '@angular/core';
import { Horse } from '../../horse';

@Component({
    selector: 'app-stallion-detail',
    templateUrl: './stallion-detail.component.html',
    styleUrls: ['./stallion-detail.component.css']
})
export class StallionDetailComponent implements OnInit {

    @Input() stallion: Horse;

    constructor() {
    }

    ngOnInit() {
    }

}
