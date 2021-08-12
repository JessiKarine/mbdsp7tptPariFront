import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input() match : Match;
  @Input() callBack : Function;
  @Input() isQrCodeMode : boolean = false ; 
  constructor() { }

  ngOnInit(): void {
  }

  pariHandler(): void {

  }
}
