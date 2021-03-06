import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { PubBanner } from 'src/app/models/pub-banner';
import { Sponsors } from 'src/app/models/sponsor';
import { MatchService } from 'src/app/service/match.service';
import { Match } from '../../models/match';
declare var $ :  any ; 
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
   pubBannerList : PubBanner[] = [
     {
       title : "test",
       value : 15000 , 
       firstElement : "plus de",
       secondElement : "jeux",
       thirdElement : { 
         url : "",
         name : "Pariez"
       },
       imageBackground : ""
     },{
      title : "test",
      value : 15000 , 
      firstElement : "plus de",
      secondElement : "jeux",
      thirdElement : { 
        url : "",
        name : "Pariez"
      },
      imageBackground : ""
    }
   ];
   public theBoundCallback: Function;
   matchSelected : Match ; 
  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
    this.theBoundCallback = this.getModalMatch.bind(this);
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

  getModalMatch(match : Match) {  
      this.matchSelected = match ; 
      $('#modalMatch').modal('show');
  }

}
