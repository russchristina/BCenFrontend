import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Event} from 'src/app/models/Event'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }

  findAllEvents(): Observable<Event[]>{
    return this.http.get(environment.findAllEvents) as Observable<Event[]>
  }

  saveEvent(newEvent:Event): Observable<Event>{
    let headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post(environment.saveEvent, JSON.stringify(newEvent), {headers: headers}) as Observable<Event>
  }
}
