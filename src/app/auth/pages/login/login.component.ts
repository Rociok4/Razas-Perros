import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent  {

  constructor(private route: Router,
              private authservice: AuthService) { }

 login(){

  this.authservice.login()
    .subscribe(resp => {
      console.log(resp)

      if (resp.id){
        this.route.navigate (['/heroes'])
      }
    })

  

 }
}
