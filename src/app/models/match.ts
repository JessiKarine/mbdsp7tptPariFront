import { Equipe } from "./equipe";
import { Categorie } from "./categorie";
export class Match {
    idcategorie : Categorie ; 
    idequipe1 : Equipe ; 
    idequipe2 : Equipe ;
    date : String ; 
    heure : String ; 
    coteEquipe1 : Number ; 
    coteEquipe2 : Number ; 
    coteMatchNull : Number ;
}
