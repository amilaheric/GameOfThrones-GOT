import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from '../model/quoteModel';
import { MyConfig } from '../MyConfig';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesServiceService {

  quotes: Quote [] = [];
  constructor(private http: HttpClient) { }

getRandomQuotes(): Observable<Quote[]> {
  return this.http.get<Quote[]>(MyConfig.addressServer + 'random/5');
}
getReplaceRandom(count: number): Observable<any> {
  const requests = Array.from({ length: count }, () => this.http.get<Quote>(MyConfig.addressServer + 'random'));

  return forkJoin(requests);
}
}
