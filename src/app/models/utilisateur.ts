import { Role } from "./role";

export class Utilisateur{
    _id : String;
    login : String;
    password : String;
    nom : String;
    prenom : String;
    etat : String;
    email : String;
    numeroTelephone : String;
    imageProfil : String;
    idRole : Role;
    public constructor(login : String,password : String,nom : String,prenom : String,etat : String,email : String,numeroTelephone : String,idRole : Role){
        this.login =login ;
        this.password = password ;
        this.nom = nom ;
        this.prenom = prenom ;
        this.etat = etat ;
        this.email = email ;
        this.numeroTelephone = numeroTelephone;
        this.idRole = idRole;
    }
}