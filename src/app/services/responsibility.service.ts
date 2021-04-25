import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Responsibility } from '../models/Responsibility';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResponsibilityService {

  constructor(private http:HttpClient) { }

  findAll(): Observable<Responsibility[]>{
    return this.http.get(environment.findAllResponsibilities) as Observable<Responsibility[]>
  }
}
