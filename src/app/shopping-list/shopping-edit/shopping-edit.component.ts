import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", {static: false}) nameInput: ElementRef;
  @ViewChild("amountInput", {static: false}) amountInput: ElementRef;
  @Output() addItemEvent = new EventEmitter< Ingredient >();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const name: string = this.nameInput.nativeElement.value;
    const amount: number = this.amountInput.nativeElement.value;

    const newIngredient = new Ingredient(name, amount);
    console.log(newIngredient);

    this.addItemEvent.emit( newIngredient );
  }

}
