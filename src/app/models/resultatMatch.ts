import { Categorie } from "./categorie";
import { Equipe } from "./equipe";
import { Match } from "./match";

export class ResultatMatch {
    idcategorie : Categorie ; 
    idequipe1 : Equipe ; 
    idequipe2 : Equipe ;
    date : String ; 
    heure : String ; 
    coteequipe1 : Number ; 
    coteequipe2 : Number ; 
    coteMatchNull : Number ;
    pointequipe1 : Number;
    pointequipe2 : Number;
}
