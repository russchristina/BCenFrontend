import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { VolunteeringComponent } from './components/volunteering/volunteering.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { SliderComponent } from './components/slider/slider.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegistrationComponent,
    VolunteeringComponent,
    ProgrammingComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
