import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  toggleform: boolean = false;

  showSignup() {
    this.toggleform = true;
  }

  showLogin() {
    this.toggleform = false;
  }

  registerObj: any = {
      UserId: 0,
      emailId: "",
      password:"", 
      createDate: new Date(),
      fullName : "",
      mobileNo : "",
  };

  http = inject(HttpClient);
  router = inject(Router);
  onRegister() {
    debugger;
    this.http.post("http://localhost:5253/api/User/CreateNewUser", this.registerObj).subscribe((res:any) => {
      alert("User registered successfully" + this.registerObj.fullName + " Please login now.");
    }, (error) => {
      debugger;
      alert("Error registering user:"+ error.error.message);
    });
  }
  loginObj: any = {
      emailId: "",
      password:"", 
  };

  onLogin() {
 
    this.http.post("http://localhost:5253/api/User/Login", this.loginObj).subscribe((res:any) => {
      alert("User logged in successfully" );
      localStorage.setItem("User", JSON.stringify(res));
      this.router.navigate(['user-list']);
    }, (error) => {

      alert("Error logging in user:"+ error.error.message);
    });
  }

}
