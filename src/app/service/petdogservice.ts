import { Observable, of } from "rxjs";
import { Petdog } from "../model/petdog";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable ({providedIn: 'root'})
export class PetdogService {
    petdogUrl: string

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(private http: HttpClient) {

    this.petdogUrl = 'http://localhost:18080/Petdog/';

  }

  public getSpecificDog(id: number): Observable<Petdog> {
    return this.http.get<Petdog>(this.petdogUrl + id.toString());
  }

  public getDogs(): Observable<Petdog[]> {
    return this.http.get<Petdog[]>(this.petdogUrl);
  }
  
  public addPetdog(petdog: Petdog): Observable<Petdog> {
    return this.http.post<Petdog>(this.petdogUrl, Petdog, this.httpOptions);
  }

  public deleteDog(id: number): Observable<Petdog> {
    const url = `${this.petdogUrl}/${id}`;
    return this.http.delete<Petdog>(url, this.httpOptions);
  }

  public updateDog(petdog: Petdog): Observable<any> {
    return this.http.put(this.petdogUrl, Petdog, this.httpOptions);
  }

  
}

