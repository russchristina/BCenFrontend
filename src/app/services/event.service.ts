import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }

  findAllEvents(): Observable<Event[]>{
    return this.http.get(environment.findAllEvents) as Observable<Event[]>
  }

  saveEvent(newEvent:Event): Observable<Event>{
    return this.http.post(environment.saveEvent, JSON.stringify(newEvent)) as Observable<Event>
  }
}
