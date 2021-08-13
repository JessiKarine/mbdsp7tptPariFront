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
  enteteButton : Button =  {
  value : "Inscription" 
  }
  constructor(private utilisateurService : UtilisateurService) { 
  }
  validerButton : Button =  {
    value : "Valider" , 
    callBack : function() {
        const idRole = new Role(2,"joueur","2");
        this.utilisateur = new Utilisateur(this.login,this.password,this.nom,this.prenom,"",this.email,this.numeroTelephone,idRole);
        this.utilisateur.etat = "active";
        this.utilisateurService.inscription(this.utilisateur)
         .subscribe(() => {
          console.log("inscription ao");
      })
    }
  }
  ngOnInit(): void {
    
  }

}
