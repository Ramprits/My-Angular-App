import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from 'app/events/events-list.component';
import { ContactComponent } from 'app/contact/contact.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
