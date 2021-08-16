import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import { Button } from 'src/app/models/ui/button.models';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  utilisateur : Utilisateur ;
  login : String;
  password : String;
  nom : String;
  prenom : String;
  email : String;
  numeroTelephone : String;
  error : String;
  enteteButton : Button =  {
  value : "Inscription" 
  }
  validerButton : Button =  {
    value : "Valider" , 
    callBack : Function ,
    isOnLoad : false , 
  }
  constructor(private utilisateurService : UtilisateurService) { 
    this.validerButton.callBack = this.inscription.bind(this);
  }
  
  ngOnInit(): void {
    this.error ="";
  }
  inscription() { 
    
    const idRole = new Role(2,"joueur","2");
    this.utilisateur = new Utilisateur(this.login,this.password,this.nom,this.prenom,"",this.email,this.numeroTelephone,idRole);
    this.utilisateur.etat = "active";
    this.validerButton.isOnLoad = true ; 
    this.utilisateurService.inscription(this.utilisateur)
     .subscribe(() => {
      console.log("inscription ao");
      this.validerButton.isOnLoad = false ; 
      this.error = "votre inscription est reussi";
    })
  }
}
