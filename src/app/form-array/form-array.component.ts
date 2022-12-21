import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  bankForm = this.fb.group({
    cards: this.fb.array([this.cardItem()])
  });

  month = [1,2,3,4,5,6,7,8,9,10,11,12];
  year = [2022, 2023, 2024, 2025, 2026, 2027, 2028]
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  cardItem(): FormGroup {
    return this.fb.group({
      name: [''],
      cardNumber: [''],
      month: [''],
      year: [''],
      cvv: ['']
    });
  }

  get createdCards() {
    return this.bankForm?.get('cards') as FormArray;
  }

  addCards() {
    this.createdCards.push(this.cardItem());
  }

  delete(index: number) {
    if (index !== 0) {
      return this.createdCards.removeAt(index);
    }
  }

  save() {
    console.log(this.bankForm);
  }
}
