import { Component, Input, OnInit } from '@angular/core';
import { Button } from 'src/app/models/ui/button.models';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() button : Button;
  constructor() { }

  ngOnInit(): void {
  }

}
