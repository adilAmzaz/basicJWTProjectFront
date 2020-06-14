import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GlobalConfig } from 'src/app/global-config';
//import { error } from 'protractor';
import { TokenStorageService } from '../token-storage.service';
import { UserModule, ERole } from 'src/app/models/user/user.module';
import { Router } from '@angular/router';
import { UserHttpService } from '../user-http.service';
import { error } from 'protractor';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private _http: HttpClient, private _router : Router,private _userService : UserHttpService) { }

  ngOnInit(): void {
  }
  userLogInForm = new FormGroup({
    username: new FormControl(null, [
        Validators.required
    ]),
    password: new FormControl(null, [
      Validators.required
  ])
})

public  login(){
  TokenStorageService.removeToken();
   this._http.post(GlobalConfig.authenticate,this.userLogInForm.value).subscribe(
    data =>{
      let obj = JSON.parse(JSON.stringify(data));
      TokenStorageService.saveToken("Bearer "+ obj.token);
      TokenStorageService.saveUser(this.userLogInForm.value);
      TokenStorageService.isLogInSuccess = true;
      this._http.get<UserModule>(GlobalConfig.getUserByUsername+this.userLogInForm.controls['username'].value).subscribe(
        infos =>{
          let obj2 =JSON.parse(JSON.stringify(infos))

          TokenStorageService.saveCompleteUser(obj2);
          TokenStorageService.completeName = obj2.firstName+" "+obj2.lastName;
          UserHttpService.completeName = obj2.firstName+" "+obj2.lastName;
          if(obj2.roles[0].name === ERole[2])
            UserHttpService.isAdmin = true;
          this._router.navigate(['/home']);
        },
        error =>{
          console.log(error)
        }
      )
    },
    error =>
    {
      console.log(error)
    }
  )
}

getCompleteUser() {
  if(TokenStorageService.isLogInSuccess){
;
    return true;
  }
  return false;
}


}
