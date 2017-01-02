import { resetFakeAsyncZone } from '@angular/core/testing';
import { Injectable, OnInit } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Reading } from './app.reading';

@Injectable()
export class ReadingsService {

   //private baseUrl: string = 'http://192.168.1.83:8080/api'; //{?page,size,sort}';
  private baseUrl: string = 'http://localhost:8080/api'; //{?page,size,sort}';

  constructor(private http: Http) { }

/**
 * 
 * @param start - the oldest date to get data for 
 * @param end - the newest date to get date for
 */
  public getDailyReadings(start: Date, end: Date): Observable<Reading[]> {
    //res.json().content as Reading[] <- return an array of Readings
    //res.json().result as Reading[] <- returns an array of objects with content link and paging etc.
    var params = new URLSearchParams();
    params.append('start', start.toISOString());
    params.append('end', end.toISOString());     

    return this.http.get(`${this.baseUrl}/dailyreadings/search/findByDateBetween`, { search: params })
      .map((res: Response) => res.json().content as Reading[])
      //.do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(handleError);
  }

/**
 * 
 * @param start - the oldest date to get data for 
 * @param end - the newest date to get date for
 */
  public getRecentReadings(start: Date, end: Date): Observable<Reading[]> {
    var params = new URLSearchParams();
    params.append('start', start.toISOString());
    params.append('end', end.toISOString());        
    return this.http.get(`${this.baseUrl}/readings/search/findByDateBetween`, { search: params })
      .map((res: Response) => res.json().content as Reading[])      
      .catch(handleError);
  }

  public getCurrentReadings() : Observable<Reading> {
    return this.http.get(`${this.baseUrl}/readings/search/findFirstByOrderByDateDesc`)
      .map((res: Response) => res.json() as Reading)
      .catch(handleError);
  }
}

// this could also be a private method of the component class
function handleError(error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Could not fetch readings`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}

