import { Observable } from "rxjs";
import { Account } from "../model/account";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable ({providedIn: 'root'})
export class accountService {
    accountUrl: string

  constructor(private http: HttpClient) {

    this.accountUrl = 'http://localhost:18080/account/';

  }

  public getAccount(username: string): Observable<Account> {
    return this.http.get<Account>(this.accountUrl + username);
  }

}