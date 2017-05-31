import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from 'app/events/events-list.component';
import { ContactComponent } from 'app/contact/contact.component';
import { LoginComponent } from "app/user/login/login.component";
import { CustomerComponent } from "app/customer/customer.component";
import { RegisterComponent } from "app/user/register/register.component";

const routes: Routes = [
  {
    path: 'events', component: EventsListComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: '', redirectTo: '/events', pathMatch: 'full'
  }
  ,
  {
    path: 'SignUp', component: RegisterComponent
  },
  { path: 'customer', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
