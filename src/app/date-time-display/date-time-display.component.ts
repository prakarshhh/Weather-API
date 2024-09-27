import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-time-display',
  templateUrl: './date-time-display.component.html',
  styleUrls: ['./date-time-display.component.css']
})
export class DateTimeDisplayComponent implements OnInit {
  currentDateTime: string;

  constructor() {
    this.currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
  }
  
  ngOnInit() {
    this.currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
  }
}
