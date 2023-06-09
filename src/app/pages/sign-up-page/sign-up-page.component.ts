import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {
  auth:any={
    name:"",
    email:"",
    password:"",
    confirmpassword:""
  }
  constructor(private authservice:AuthService , private router:Router){}
  onHandleSubmit(){  
    this.authservice.signup(this.auth).subscribe(()=>{
      this.router.navigate(["/login"])
      alert("Đăng kí thành công")
    });
  }
}
