import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  http = inject(HttpClient);
  users: any[] = [];
  constructor() {
    this.getuser();
  }
  getuser() {
    this.http.get<any[]>('http://localhost:5253/api/User/getUsers').subscribe(data => {
      // Log the raw response so you can inspect property names in the browser console
      console.log('getUsers response:', data);

      // Normalize each user to include a `displayEmail` property that tries common field names
      this.users = (data || []).map(u => {
        const nestedEmail = u && u.contact ? (u.contact.email || u.contact.emailAddress) : undefined;
        const displayEmail = u?.email ?? u?.emailAddress ?? u?.emailId ?? u?.Email ?? u?.mail ?? nestedEmail ?? '-';
        return { ...u, displayEmail };
      });
    }, err => {
      console.error('getUsers error:', err);
    });
  }

}
