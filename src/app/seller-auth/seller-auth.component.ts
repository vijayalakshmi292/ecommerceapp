import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})

export class SellerAuthComponent {
  constructor() {
  }

  submitForm(data: object): void {
    console.warn(data);
    // Process the form data or perform any desired actions
  }
}