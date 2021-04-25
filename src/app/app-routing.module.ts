import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { VolunteeringComponent } from './components/volunteering/volunteering.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: "home"
  },
  {
    component: RegistrationComponent,
    path: "register"
  },
  {
    component: ProgrammingComponent,
    path: "programming"
  },
  {
    component: VolunteeringComponent,
    path: "volunteering"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
