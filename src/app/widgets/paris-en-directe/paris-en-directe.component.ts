import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Match } from 'src/app/models/match';
import { MatchCategorie } from 'src/app/models/matchCategorie';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-paris-en-directe',
  templateUrl: './paris-en-directe.component.html',
  styleUrls: ['./paris-en-directe.component.css']
})
export class ParisEnDirecteComponent implements OnInit {
  categorieList = null;
  matchListPaginer = null;
  isactive = "tous";
  page: number=1;
  limit: number=10;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  prevPage: number;
  hasNextPage: boolean;
  nextPage: number;
  constructor(private matchService:MatchService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.page = +queryParams.page || 1;
      this.limit = +queryParams.limit || 10;
      this.getCategories();
      this.getMatchPaginer('');
    });
    
  }
  getLiveIcons = () => { 
     let test = ' <svg id=Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.33 80.68">';
      test+='<defs>';
            test+='<style>.cls-1{fill:#63a9d8;}.cls-2{fill:#1f72af;}.cls-3{font-size:42.74px;fill:#fff;stroke:#fff;stroke-width:2px;font-family:Roboto,Arial,sans-serif, Arial-Relcom;}';
            test+='</style>';
        test+='</defs>';
        test+='<rect class="cls-1" width="130.33" height="68.17"/>';
        test+='<rect class="cls-2" x="6.17" y="6.09" width="118" height="55.75"/>';
        test+='<text class="cls-3" transform="translate(17.04 49.35) scale(1.05 1)">LIVE</text>';
        test+='<rect class="cls-1" x="43.45" y="74.46" width="43.46" height="6.22"/>';
        test+='<rect class="cls-1" x="55.85" y="66.26" width="18.6" height="8.88"/>';
    test+='</svg>' ; 
    return test ;     
  }

  getMatchPaginer= (idcategorie : string) => {
    if(idcategorie ==='') { 
      this.isactive = "tous";
    }
    else { 
      this.isactive = idcategorie;
    }
    this.matchService.getMatchPaginer(idcategorie)
    .subscribe(data => {
      console.log("données reçues match paginer");
      console.log(data.docs);
      this.matchListPaginer = data.docs as MatchCategorie[];
      this.page = data.page;
      this.limit = data.limit;
      this.totalDocs = data.totalDocs;
      this.totalPages = data.totalPages;
      this.hasPrevPage = data.hasPrevPage;
      this.prevPage = data.prevPage;
      this.hasNextPage = data.hasNextPage;
      this.nextPage = data.nextPage;
    });
    
  }

  premierePage() {
    this.router.navigate(['/home'], {
      queryParams: {
        page:1,
        limit:this.limit,
      }
    });
  }
  
  pageSuivante() {
    /*
    this.page = this.nextPage;
    this.getAssignments();*/
    this.router.navigate(['/home'], {
      queryParams: {
        page:this.nextPage,
        limit:this.limit,
      }
    });
  }
  
  
  pagePrecedente() {
    this.router.navigate(['/home'], {
      queryParams: {
        page:this.prevPage,
        limit:this.limit,
      }
    });
  }
  
  dernierePage() {
    this.router.navigate(['/home'], {
      queryParams: {
        page:this.totalPages,
        limit:this.limit,
      }
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

  exportPDF = () => { 
    let divContents = '';
    divContents +="<h1>Calendrier des matchs</h1>";
    divContents += "<table border='1' width='100%' >";
    for(let i = 0 ; i<this.matchListPaginer.length ; i++) {
      divContents +="<tr class='header' style='background-color: #4988b9 ; color : white ; font-weight : bold' ; border : 1px solid #4988b9 ; border-width : thin' >";
          divContents+=`<td colspan="100%">${this.matchListPaginer[i]._id}</td>`;
      divContents +="</tr>";
      divContents +="<tr class='subheader' style='background-color: #f7f7f7'>";
        divContents+=`<td>equipe 1</td>`;
        divContents+=`<td>equipe 2</td>`;
        divContents+=`<td>Score equipe 1</td>`;
        divContents+=`<td>Score equipe 2</td>`;
        divContents+=`<td>Cote equipe 1</td>`;
        divContents+=`<td>Cote equipe 2</td>`;
      divContents +="</tr>";
        for(let j=0;j<this.matchListPaginer[i].match.length ; j++) { 
            
          divContents+="<tr>";
            divContents+=`<td>${this.matchListPaginer[i].match[j].idequipe1.nom}</td>`;
            divContents+=`<td>${this.matchListPaginer[i].match[j].idequipe2.nom}</td>`;
            divContents+=`<td>${this.matchListPaginer[i].match[j].pointequipe1}</td>`;
            divContents+=`<td>${this.matchListPaginer[i].match[j].pointequipe2}</td>`;
            divContents+=`<td>${this.matchListPaginer[i].match[j].coteequipe1}</td>`;
            divContents+=`<td>${this.matchListPaginer[i].match[j].coteequipe2}</td>`;
            
          divContents+="</tr>";
        }
    }
    divContents += "</table>";
    divContents += "<style>";
      divContents +=  "table  {border-collapse : collapse}";
      divContents +=  "table td {height : 50px; text-align : center}";
      divContents +=  "table tr.subheader td {color : #1b5785}";
    divContents += "</style>";
  
   var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write('<html>');
    printWindow.document.write('<body>');
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  }
}
