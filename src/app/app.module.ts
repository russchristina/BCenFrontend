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
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegistrationComponent,
    VolunteeringComponent,
    ProgrammingComponent,
    SliderComponent,
    FooterComponent,
    ScrollToTopComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
