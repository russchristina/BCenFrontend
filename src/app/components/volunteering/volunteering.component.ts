import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResponsibilityService } from 'src/app/services/responsibility.service';
import { Responsibility } from 'src/app/models/Responsibility';
import { ThrowStmt } from '@angular/compiler';
import { UserCacheService } from 'src/app/services/user-cache.service';
import { User } from 'src/app/models/User';

/*This is where we will list responsibilities.*/

//Two things to note: We need to work on disabling the check marks for events that already have max participants (so that have zero spots remaining). Also, we should not have to sign up for responsibilities that we're auto assigned to anyway. That means we'd have to be in the DB already. Let's just disable them an not assign them to anyone in the DB.

//I need to add an array or JS object that tracks whether or not each check mark is "active" or "inactive".

//Currently addressing unchecking a box and thus unregistering for a task.
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
  checkBoxStates:boolean[] = []

  initializeCheckboxStates():void{
    for(let r of this.responsibilities){
      //All checkbox states are false to begin with, meaning they aren't checked.
      this.checkBoxStates.push(false)
    }
  }

  findAllResponsibilities():void{
    this.responsibilityService.findAll().subscribe(
      (data) => {
        this.responsibilities = data
        console.log(this.responsibilities)
        //Checkbox states are initialized here because the responsibilities are populated asynchronously
        this.initializeCheckboxStates()
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

    //Find the responsibility in the list of available responsibilities by its ID and check the number of participants. I need to make sure that a user cannot sign up for a responsibility that is at its limit for participants.
    //Yikes. I'm tired of iterating through this array, but it's also the case that if I ever just rely on the index alone, I have to make sure that I haven't changed the order of the elements of even removed an element from the array (well, pseudo removal via making an entirely new array) because that will completely throw off any algorithm which depends on a certain element have a certain index
    for(let r of this.responsibilities){
      if(r.id === responsibilityId && r.users.length < r.upperlimit){
        if(this.checkBoxStates[r.id - 1] === false){
           //abstract out into isSignedUp
      //Check that the user is not already signed up for a responsibility
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
        this.userCacheService.getUserData().subscribe(
          (user) => {
            r.users.push(user)
            console.log(this.responsibilities)
            //Unforuntately, this depends on nothing about the order of the responsibilities in the array changing. This makes my stomach hurt.
            this.checkBoxStates[r.id - 1] = true
          },
          () => {
            console.log('Cannot access cached user.')
          }
        )}else{
          //deselection occurs
          this.deselectResponsibility(r.id)
          this.checkBoxStates[r.id - 1] = false
        }
      }
    }
  }

  deselectResponsibility(responsibilityId:number):void{
    let currentUser = new User()
    this.userCacheService.getUserData().subscribe(
      (data) => {
        currentUser = data
      },
      () => {
        console.log('Could not fetch current user!')
      }
    )
    //remove the user from the responsibility
    for(let r of this.responsibilities){
      if(r.id === responsibilityId){
        //The user IDs are not in order, so I can't use an enhanced for loop to move through the users to splice by index later. Ouch.
        for(let i = 0; i < r.users.length; i++){
          //Based on your implementation, this should be true anyway.
          if(r.users[i].name === currentUser.name){
            //Remove this user from the users array for the responsibility
            console.log(r.users.splice(i, 1))
          }
        }
      }
    }
  }

}
