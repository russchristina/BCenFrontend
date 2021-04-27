import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResponsibilityService } from 'src/app/services/responsibility.service';
import { Responsibility } from 'src/app/models/Responsibility';
import { ThrowStmt } from '@angular/compiler';
import { UserCacheService } from 'src/app/services/user-cache.service';

/*This is where we will list responsibilities.*/

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.css']
})
export class VolunteeringComponent implements OnInit, OnDestroy {

  constructor(private responsibilityService:ResponsibilityService, private userCacheService:UserCacheService) { }

  ngOnInit(): void {
    this.findAllResponsibilities()
  }

  ngOnDestroy():void{
    //Actually, you don't need to change anything about the user as my user model doesn't track responsibilities. Rather, responsibilities track users. As such, I only need to add users to the responsibility and update the responsibility.
  }

  responsibilities:Responsibility[] = [];
  userSelectedResponsibilities:Responsibility[] = []

  findAllResponsibilities():void{
    this.responsibilityService.findAll().subscribe(
      (data) => {
        this.responsibilities = data
      },
      () => {
        console.log('Ooops! Something went wrong!')
      }
    )
  }

  //Define the logic for the user taking on a responsibility
  acceptResponsibility(responsibilityId:number):void{
    //Find the responsibility in the list of available responsibilities by its ID and check the number of participants
    for(let r of this.responsibilities){
      if(r.id === responsibilityId && r.users.length < r.upperlimit){
        this.userCacheService.getUserData().subscribe(
          (user) => {
            r.users.push(user)
          },
          () => {
            console.log('Cannot access cached user.')
          }
        )
       //Also update the responsibility info in the DB. I currently do no not have a means of doing this on the backend though. You might want to do this in a lifecycle hook!
      }else{
        //Visually indicate to the user that there is a problem.
      }
    }
  }

}
