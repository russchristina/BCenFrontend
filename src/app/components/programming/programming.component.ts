import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import {Event} from 'src/app/models/Event'
import { User } from 'src/app/models/User';
import { UserCacheService } from 'src/app/services/user-cache.service';

/*This is where you will see events listed.*/
@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {
S
  constructor(private eventService:EventService, private userCacheService:UserCacheService) { }

  ngOnInit(): void {
    this.findAllEvents()
  }

  events:Event[] = []
  newEvent:Event = new Event()


  findAllEvents():void{
    this.eventService.findAllEvents().subscribe(
      (data) => {
        this.events = data
        console.log(this.events)
      },
      () => {
        console.log('Ooops! Something went wrong!')
      }
    )
  }

  createEvent():void{
    this.userCacheService.getUserData().subscribe(
      (data) => {
        this.newEvent.creator = data
        console.log(data)
      },
      () => {
        console.log('Could not get cached user!')
      }
    )
    this.eventService.saveEvent(this.newEvent).subscribe(
      (data) => {
        this.events.push(data)
        //Perhaps I should consider re-rendering the view after this addition to the array is made.
      },
      () => {
        console.log('Ooops! Something went wrong!')
      }
    )
  }

}
