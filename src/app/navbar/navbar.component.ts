import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/accountservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  logout(): void {
    console.log(this.accountService.loggedAccount);
    this.accountService.loggedAccount = undefined;
  }
}
