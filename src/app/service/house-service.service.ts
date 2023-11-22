import { Injectable } from '@angular/core';
import { MyConfig } from '../MyConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../model/houseModel';

@Injectable({
  providedIn: 'root'
})
export class HouseServiceService {

  constructor(private http: HttpClient) { }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(MyConfig.addressServer +'houses');
  }

  getHouseBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${MyConfig.addressServer}house/${slug}`)}
}
