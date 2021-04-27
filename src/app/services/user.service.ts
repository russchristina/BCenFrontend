import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  findAll(): Observable<User[]>{
    return this.http.get(environment.findAllUsers) as Observable<User[]>
  }

  saveUser(newUser:User): Observable<User>{
    return this.http.post(environment.saveUser, JSON.stringify(newUser)) as Observable<User>
  }

  findUser(user:User): Observable<User>{
    return this.http.post(environment.findUser, JSON.stringify(user)) as Observable<User>
  }
}
