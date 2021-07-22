import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../models/match';
import { Sponsors } from '../models/sponsor';
import { Config } from '../utilitaire/config.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  uri = Config.getBaseUrl()+"/api/match";
  constructor( private http:HttpClient) { }

  getDerniersMatchs():Observable<Match[]> {
    console.log("Dans le service dernier match...")
    return this.http.get<Match[]>(this.uri+'/getDerniersMatchs');
  }
  
  getSponsors():Observable<Sponsors[]> {
    console.log("Dans le service tous les sponsors...")
    return this.http.get<Sponsors[]>(this.uri+'/getSponsor');
  }



}
