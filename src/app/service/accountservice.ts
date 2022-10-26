import { Observable } from "rxjs";
import { Account } from "../model/account";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable ({providedIn: 'root'})
export class AccountService {
    accountUrl: string

  constructor(private http: HttpClient) {

    this.accountUrl = '/api/account';

  }

  public getAccount(username: string): Observable<Account> {
    return this.http.get<Account>(this.accountUrl + username);
  }

}