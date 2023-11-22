import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/personModel';
import { MyConfig } from '../MyConfig';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonsServiceService {

  persons: Person [] = []
  constructor(private http: HttpClient) { }

getPersons(): Observable<Person[]> {
  return this.http.get<Person[]>(MyConfig.addressServer + 'characters');
}

getPersonDetails(slug: string) : Observable<any> {
  return this.http.get<any>(`${MyConfig.addressServer}character/${slug}`);
}
}
