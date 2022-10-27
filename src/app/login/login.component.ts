import { Component, destroyPlatform, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { delay } from 'rxjs';

import { AccountService } from '../service/accountservice';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  state: string = "";

  constructor(
    private accountService: AccountService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  login(username: string): void {
    this.accountService.getAccount(username)
      .subscribe(account => this.accountService.loggedAccount = account);
    if (this.accountService.loggedAccount) {
      this.router.navigate(['/about-us']);
    } else [
      this.state = "login failed"
    ]
  }
}
