import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: '', component: HomeComponent, children: [
      { path: 'user-list', component: UserListComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
