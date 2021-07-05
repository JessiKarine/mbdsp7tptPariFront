import { Component, OnInit } from '@angular/core';
import { matchdata } from 'src/dataTest/matchList';
import { Match } from '../models/match';
@Component({
  selector: 'app-pari',
  templateUrl: './pari.component.html',
  styleUrls: ['./pari.component.css',
  '../../assets/vendors/datatables/dataTables.bootstrap.css']
})
export class PariComponent implements OnInit {
  matchList = matchdata as Match[];
  constructor() { }

  ngOnInit(): void {
  }

}
