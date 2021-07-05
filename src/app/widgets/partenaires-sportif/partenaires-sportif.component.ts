import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partenaires-sportif',
  templateUrl: './partenaires-sportif.component.html',
  styleUrls: ['./partenaires-sportif.component.css']
})
export class PartenairesSportifComponent implements OnInit {

  @Input() partenairesList ; 
  constructor() { }

  ngOnInit(): void {
  }

}
