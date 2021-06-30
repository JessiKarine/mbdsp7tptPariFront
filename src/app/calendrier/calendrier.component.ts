import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css',
  '../../assets/vendors/fullcalendar/fullcalendar.css',
  '../../assets/css/calendar.css']
})
export class CalendrierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
