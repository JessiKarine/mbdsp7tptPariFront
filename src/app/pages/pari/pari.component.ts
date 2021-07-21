import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/service/match.service';
import { Match } from '../../models/match';
@Component({
  selector: 'app-pari',
  templateUrl: './pari.component.html',
  styleUrls: ['./pari.component.css',
  '../../../assets/vendors/datatables/dataTables.bootstrap.css']
})
export class PariComponent implements OnInit {
  //matchList = matchdata as Match[];
   matchList = null;
  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
    this.getDerniersMatchs();
  }

  getDerniersMatchs() {
    this.matchService.getDerniersMatchs()
    .subscribe(data => {
      console.log("données reçues");
      console.log(data);
      this.matchList = data as Match[];
    });
  }

}
