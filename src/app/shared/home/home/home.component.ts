import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from 'src/app/user/user.component';
import { GlobalConfig } from 'src/app/global-config';
import { TokenStorageService } from 'src/app/user/token-storage.service';
import { UserModule } from 'src/app/models/user/user.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  test()
  {
    var url = "https://www.instagram.com/bob_taza";


  this._http.get(url).subscribe(
     infos =>{
      let obj2 =JSON.parse(JSON.stringify(infos))
      //console.log(infos.body)
      if(obj2.indexOf(("meta property=\"og:description\" content=\"")) !=-1)
        console.log("followers:", obj2.body.split("meta property=\"og:description\" content=\"")[1].split("Followers")[0])
    
  },
  error =>{
    console.log(error)
  }
 )
}
  
}
