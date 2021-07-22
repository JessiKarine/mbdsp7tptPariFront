import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-par-categorie',
  templateUrl: './match-par-categorie.component.html',
  styleUrls: ['./match-par-categorie.component.css']
})
export class MatchParCategorieComponent implements OnInit {
  @Input() match;
  constructor() { }

  ngOnInit(): void {
  }

}
