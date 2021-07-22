import { Component, OnInit } from '@angular/core';
import { Sponsors } from 'src/app/models/sponsor';
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
   sponsorsList = null;
  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
    this.getDerniersMatchs();
    this.getSponsors();
  }

  getDerniersMatchs() {
    this.matchService.getDerniersMatchs()
    .subscribe(data => {
      console.log("données reçues 2 derniers matchs");
      console.log(data);
      this.matchList = data as Match[];
    });
  }

  getSponsors() {
    this.matchService.getSponsors()
    .subscribe(data => {
      console.log("données reçues sponsors");
      console.log(data);
      this.sponsorsList = data as Sponsors[];
    });
  }

}
