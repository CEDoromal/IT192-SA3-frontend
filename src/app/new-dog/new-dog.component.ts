import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../model/dog';
import { DogService } from '../service/dogservice';
import { AccountService } from '../service/accountservice';
import { Account } from '../model/account';
import { DogsComponent } from '../dogs/dogs.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-dog',
  templateUrl: './new-dog.component.html',
  styleUrls: ['./new-dog.component.css']
})
export class NewDogComponent implements OnInit {

  isAdmin: boolean = false;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    private dogService: DogService,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (this.accountService.loggedAccount == undefined) {
      this.router.navigate(['/login']);
    } else {
      this.isAdmin = this.accountService.loggedAccount.admin;
    }
  }

  add(name: string, breed: string, age: number, color: string, vaccinated: string,traits: string): void {
    name = name.trim();
    if (!name) { return; }
    console.log(this.dogService.addDog({ name, breed, age, color, vaccinated, traits } as Dog)
      .subscribe(() => this.goBack()));
    //this.router.navigate(["/dogs"]);
  }

  goBack(): void {
    this.location.back();
  }

  toNum(input: string): number {
    return Number(input);
  }
}
