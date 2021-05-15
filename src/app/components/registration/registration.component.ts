import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { UserCacheService } from 'src/app/services/user-cache.service';
import { Router } from '@angular/router';

/*This is where we will send user data to the API*/

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  newUser:User = new User()

  constructor(private userService:UserService, private userCacheService:UserCacheService, private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
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
        console.log('Ooops! Something went wrong!')
      }
    )
}

paidOut(buttonValue):void{
  if(buttonValue === "true") this.newUser.paidinfull = true
  else this.newUser.paidinfull = false
}

}
