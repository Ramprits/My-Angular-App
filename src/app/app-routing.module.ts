import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from 'app/events/events-list.component';
import { ContactComponent } from 'app/contact/contact.component';
import { LoginComponent } from "app/user/login/login.component";
import { CustomerComponent } from "app/customer/customer.component";

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
    path: 'login', component: LoginComponent
  },
  { path: 'customer', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
