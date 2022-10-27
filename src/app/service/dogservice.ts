import { Observable, of } from "rxjs";
import { Dog } from "../model/dog";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable ({providedIn: 'root'})
export class DogService {
    dogUrl: string

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(private http: HttpClient) {

    this.dogUrl = '/api';

  }

  public getDog(id: number): Observable<Dog> {
    return this.http.get<Dog>(this.dogUrl + "/dogs/" + id.toString());
  }

  public getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogUrl + "/dogs");
  }
  
  public addDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(this.dogUrl + "/add-dog", dog, this.httpOptions);
  }

  public deleteDog(id: number): Observable<Dog> {
    const url = `${this.dogUrl}/remove-dog/${id}`;
    return this.http.delete<Dog>(url, this.httpOptions);
  }

  public updateDog(dog: Dog): Observable<any> {
    return this.http.put(this.dogUrl + "/update-dog", dog, this.httpOptions);
  }

  
}

