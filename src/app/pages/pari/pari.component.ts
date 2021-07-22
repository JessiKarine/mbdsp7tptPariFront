import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
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
   categorieList = null;
  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
    this.getDerniersMatchs();
    this.getSponsors();
    this.getCategories();
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

  getCategories() {
    this.matchService.getCategorie()
    .subscribe(data => {
      console.log("données reçues categorie");
      console.log(data);
      this.categorieList = data as Categorie[];
    });
  }

}
