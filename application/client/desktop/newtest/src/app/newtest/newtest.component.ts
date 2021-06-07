import { Component, OnInit } from '@angular/core';
import { NewtestService } from './newtest.service';

@Component({
  selector: 'app-newtest',
  templateUrl: './newtest.component.html',
  styleUrls: ['./newtest.component.scss'],
})

export class NewtestComponent implements OnInit {
    public newtest = {
        name: '',
    }

    constructor (
        private newtestService: NewtestService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.newtestService.GpCreate(this.newtest).subscribe(data => {
            this.newtest.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}