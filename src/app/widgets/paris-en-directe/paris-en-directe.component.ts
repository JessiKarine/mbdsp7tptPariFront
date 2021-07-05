import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paris-en-directe',
  templateUrl: './paris-en-directe.component.html',
  styleUrls: ['./paris-en-directe.component.css']
})
export class ParisEnDirecteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}
