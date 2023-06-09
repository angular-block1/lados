import { Component } from '@angular/core';
import { Iauth } from 'app/interfaces/auth';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
auth:Iauth={
  email:"",
  password:""
}
constructor(private authservice:AuthService){}
onHandleSubmit(){
  console.log(this.auth);
  
  this.authservice.sigin(this.auth).subscribe(()=>console.log("oke"));
}
}
