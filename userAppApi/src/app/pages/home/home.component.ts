import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
router = inject(Router);

logout() {
  localStorage.removeItem("User");
  this.router.navigate(['login']);
  alert("User logged out successfully");
}
}
