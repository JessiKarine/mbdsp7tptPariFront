import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { Config } from '../utilitaire/config.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  uri = Config.getBaseUrl()+"/api/utilisateur/";
  constructor(private http:HttpClient) { }

    inscription(user : Utilisateur):Observable<any> {
    console.log("Dans le service de l'utilisateur...")
    return this.http.post<Utilisateur[]>(this.uri,user);
  }
}
