import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  //Id : number;
  lastName: string;
  firstName: string;
  isFamele: boolean;
  birtheDate: Date;
  password: string;
  phone: string;
  adress: string;
  zipCode: string;
  username : string;
  city: string;
 }
