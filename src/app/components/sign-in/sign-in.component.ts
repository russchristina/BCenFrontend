import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { UserCacheService } from 'src/app/services/user-cache.service';
import { Router } from '@angular/router';
import {catchError} from 'rxjs/operators'
import {of, empty} from 'rxjs'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService:UserService, private userCacheService:UserCacheService, private router:Router) { }

  ngOnInit(): void {
  }

  existingUser:User = new User()

  signIn():void{
    this.userService.findUser(this.existingUser).subscribe(
      (data) => {
        //This is totally my bad. The backend returns null if the user isn't an authenticated one. That caused the null issue on the frontend. This business logic should be moved to the service.
        if(data === null) {this.existingUser = new User()}
        else this.existingUser = data
        if(this.existingUser.id === 0){
          //This block only runs once; if there's an error, the error handler continues to execute
          //This means that the user credentials are wrong. Probably just tell the user their credentials are wrong.
        }else{
          //Add the user to the cache
          this.userCacheService.updateUser(this.existingUser)
          this.router.navigate(['programming'])
        }
      },
      () => {
        console.log('Could not log in.')
      }
    )
  }

}
