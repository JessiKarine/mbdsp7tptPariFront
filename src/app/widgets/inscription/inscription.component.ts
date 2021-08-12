import { Component, OnInit } from '@angular/core';
import { Button } from 'src/app/models/ui/button.models';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  enteteButton : Button =  {
      value : "Inscription" , 
      callBack : function() { 
          alert("test");
      }
  }
  validerButton : Button =  {
    value : "Valider" , 
    callBack : function() { 
        alert("validation");
    }
}
  constructor() { }

  ngOnInit(): void {
  }

}
