import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultat } from '../models/resultat';
import { ResultatCategorie } from '../models/resultatCategorie';
import { Config } from '../utilitaire/config.model';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  uri = Config.getBaseUrl()+"/api/resultat";
  uriorcl = Config.getBaseUrlOracle();
  constructor(private http:HttpClient) { }

  getResultatPaginer(idcategorie : String):Observable<any> {
    console.log("Dans le service de resultat...")
    return this.http.get<ResultatCategorie[]>(this.uri+'/getResultatParCategorie?nomcategorie='+idcategorie);
  }
}
