import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {
  ingredients:Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('Organes',10)
  ];
  constructor()
  {

  }
  ngOnIit(){}
}
