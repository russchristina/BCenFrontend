import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

/*This is where we will send user data to the API*/

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  registerUser(newUser:User){
    this.userService.saveUser(newUser).subscribe(
      data => {
        
      },
      () => {
        console.log('Ooops! Something went wrong!')
      }
    )
  }

}
