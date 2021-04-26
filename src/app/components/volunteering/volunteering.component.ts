import { Component, OnInit } from '@angular/core';
import { ResponsibilityService } from 'src/app/services/responsibility.service';

/*This is where we will list responsibilities.*/

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.css']
})
export class VolunteeringComponent implements OnInit {

  constructor(private responsibilityService:ResponsibilityService) { }

  ngOnInit(): void {
  }

}
