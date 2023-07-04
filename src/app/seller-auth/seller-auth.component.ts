import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
// import { Router } from '@angular/router';
import { SignUp } from '../data.type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})

export class SellerAuthComponent implements OnInit
{
  showLogin=false;
  authError :string=' ';
  constructor(private seller:SellerService)
   
  {}
  
ngOnInit():void{
this.seller.reloadSeller()
  }

  submitForm(data: SignUp): void { 
    console.warn(data);
  this.seller.userSignUp(data);
  }

//   Login(data: SignUp): void { 
//     //console.warn(data);
//     this.seller.userLogin(data);
//     this.seller.isLoginError.subscribe((isError)=>{
//       if(isError ){
// this.authError="Email or password is incorrect";
//       }
//     })
//   }
Login(data: SignUp): void {
  this.seller.userLogin(data);
  this.seller.isLoginError.subscribe((isError) => {
    if (isError) {
      this.authError = "Email or password is incorrect";
    }
  });
}

  OpenLogin()
  {
    this.showLogin=true

  }
  openSignUp()
  {
    this.showLogin=false
  }
} 