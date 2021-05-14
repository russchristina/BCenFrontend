import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import {Event} from 'src/app/models/Event'
import { User } from 'src/app/models/User';
import { UserCacheService } from 'src/app/services/user-cache.service';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

/*This is where you will see events listed.*/
@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {
S 
  private _success = new Subject<string>();
  constructor(private eventService:EventService, private userCacheService:UserCacheService) { }

  ngOnInit(): void {
    this.findAllEvents()
  }

  
  successAlert:object = {
    type: 'success',
    message: 'Your panel submission was successful!'
  }
  alertVisible:boolean = false
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
  successMessage = '';
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;
  createEvent():void{
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => this.successMessage = null);
    this.userCacheService.getUserData().subscribe(
      (data) => {
        this.newEvent.creator = data
        
        if (data) {
          this._success.next("Panel added!");
        }
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
