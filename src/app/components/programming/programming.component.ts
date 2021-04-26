import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

/*This is where you will see events listed.*/
@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {
S
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
  }

}
