import { Injectable } from '@angular/core';
import { User } from '../models/User';

/*Not a priority right now, but could be useful. But consider using rxjs subjects to create a queue.*/
@Injectable({
  providedIn: 'root'
})
export class UserCacheService {

  constructor() { }

  userData:any = {
    user:User,
    authenticated:Boolean
  }
}
