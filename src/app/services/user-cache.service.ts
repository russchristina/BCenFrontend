import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  //Create this service as a singleton in the app by providing it in root
  providedIn: 'root'
})
export class UserCacheService {

private userData:BehaviorSubject<User>


  constructor() {
    this.userData = new BehaviorSubject<User>(null)
   }

   updateUser(user:User): void{
     this.userData.next(user)
   }

   getUserData() : Observable<User>{
     return this.userData.asObservable()
   }

}
