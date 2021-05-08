import { Component, OnInit } from '@angular/core';
import { UserCacheService } from 'src/app/services/user-cache.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true
  name = "anchLinks";
  ids: Array<String> = ["About", "Rules"]

  constructor(private userCacheService:UserCacheService) { }

  ngOnInit(): void {
    this.userCacheService.getUserData().subscribe(
      (data) => {
        this.currentUser = data
      },
      () => {
        console.log('Error: Could not get current user data')
      }
    )
  }

  currentUser:User = null
 
}
