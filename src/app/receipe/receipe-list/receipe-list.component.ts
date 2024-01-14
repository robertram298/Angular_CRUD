import { Component } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent {
  receipes:Receipe[]=[
    new Receipe(1,"Dosa","Morning Food","https://upload.wikimedia.org/wikipedia/commons/6/61/Masala_Dosaby_by_Sonia_Gayal.jpg")
  ];
  constructor()
  { }
  ngOnInit()
  {

  }
}
