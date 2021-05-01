import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResponsibilityService } from 'src/app/services/responsibility.service';
import { Responsibility } from 'src/app/models/Responsibility';
import { ThrowStmt } from '@angular/compiler';
import { UserCacheService } from 'src/app/services/user-cache.service';
import { User } from 'src/app/models/User';

/*This is where we will list responsibilities.*/

//Two things to note: We need to work on disabling the check marks for events that already have max participants (so that have zero spots remaining). Also, we should not have to sign up for responsibilities that we're auto assigned to anyway. That means we'd have to be in the DB already. Let's just disable them an not assign them to anyone in the DB.

//I need to add an array or JS object that tracks whether or not each check mark is "active" or "inactive".

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.css']
})
export class VolunteeringComponent implements OnInit {

  constructor(private responsibilityService:ResponsibilityService, private userCacheService:UserCacheService) { }

  ngOnInit(): void {
    this.findAllResponsibilities()
  }

  responsibilities:Responsibility[] = [];
  userSelectedResponsibilities:Responsibility[] = []

  findAllResponsibilities():void{
    this.responsibilityService.findAll().subscribe(
      (data) => {
        this.responsibilities = data
        console.log(this.responsibilities)
      },
      () => {
        console.log('Ooops! Something went wrong!')
      }
    )
  }

  updateResponsibilities():void{

    //Really abstract all of this out because I could cry. :(
    this.responsibilityService.update(this.responsibilities).subscribe(
      (data) => {
        this.responsibilities = data
      },
      () => {
        console.log('Could not update responsibilities.')
      }
    )
  }

  tallyResponsibilities():number{
    let numberOfResponsibilities = 0;
    let currentUserName:String = "";

    this.userCacheService.getUserData().subscribe(
      (user) => {
        currentUserName= user.name
      }
    )

    for(let r of this.responsibilities){
      for(let u of r.users){
        if(u.name === currentUserName){
          numberOfResponsibilities++;
        }
      }
    }

    return numberOfResponsibilities;
  }

  //Define the logic for the user taking on a responsibility
  selectResponsibility(responsibilityId:number):void{

    //Check to see if the user has signed up for 3 responsibilities already
    if(this.tallyResponsibilities() > 3){
      //Show error message to user and end method
      return;
    }

     //I also have to check if they're already signed up for that responsibility

     let currentUser = new User()
     this.userCacheService.getUserData().subscribe(
       (data) => {
         currentUser = data
       },
       () => {
         console.log('Could not get cached user.')
       }
     )
     for(let r of this.responsibilities){
       if(r.id === responsibilityId){
         for(let u of r.users){
           if(u.name === currentUser.name){
         //The user cannot select this responsibility
         return;
           }
         }
       }
     }

     console.log('it makes it past the already signed up check')

    //Find the responsibility in the list of available responsibilities by its ID and check the number of participants. I need to make sure that a user cannot sign up for a responsibility that is at its limit for participants.
    for(let r of this.responsibilities){
      console.log('the limit')
      console.log(r.id)
      console.log(responsibilityId)
      if(r.id === responsibilityId && r.users.length < r.upperlimit){
        this.userCacheService.getUserData().subscribe(
          (user) => {
            r.users.push(user)
            console.log('user added')
          },
          () => {
            console.log('Cannot access cached user.')
          }
        )
       //Also update the responsibility info in the DB. I currently do no not have a means of doing this on the backend though. You might want to do this in a lifecycle hook!
      }
    }
  }

}
