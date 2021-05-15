import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { UserCacheService } from 'src/app/services/user-cache.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

/*This is where we will send user data to the API*/

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private _success = new Subject<string>();
  newUser:User = new User()

  constructor(private userService:UserService, private userCacheService:UserCacheService, private router:Router) { }

  ngOnInit(): void {
  }

  successAlert: object = {
    type: 'success',
    message: 'Your panel submission was successful!'
  }
  alertVisible: boolean = false

  successMessage = '';
  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert: NgbAlert;
  registerUser(){
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => this.successMessage = null);
    this.userService.saveUser(this.newUser).subscribe(
      (data) => {
        //We will need to add the user to the makeshift cache as well
        this.userCacheService.updateUser(data)
        this.userCacheService.getUserData().subscribe(
          (user) => {
          },
          () =>{
            console.log('Rejected')
            
          }
        )
        this.router.navigate(['programming'])
      },
      () => {
        this._success.next("Missing information!");
        console.log('Ooops! Something went wrong!')
      }
    )
}

paidOut(buttonValue):void{
  if(buttonValue === "true") this.newUser.paidinfull = true
  else this.newUser.paidinfull = false
}

}
