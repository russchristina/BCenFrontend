import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { VolunteeringComponent } from './components/volunteering/volunteering.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    component: HomeComponent,
    path: ""
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
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
