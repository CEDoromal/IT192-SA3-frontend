import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/dog';
import { DogService } from '../service/dogservice';
import { AccountService } from '../service/accountservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  isAdmin: boolean = false;
  dogs: Dog[] = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private dogService: DogService, 
    private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.accountService.loggedAccount == undefined) {
      //this.router.navigate(['/login']);
    } else {
      this.isAdmin = this.accountService.loggedAccount.admin;
    }
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs()
    .subscribe(dogs => this.dogs = dogs);
  }

  add(name: string, breed: string, age: number, color: string, vaccinated: string,traits: string): void {
    name = name.trim();
    if (!name) { return; }
    this.dogService.addDog({ name, breed, age, color, vaccinated, traits } as Dog)
      .subscribe(dog => {
        this.dogs.push(dog);
      });
      
  }

  delete(dog: Dog): void {
    this.dogs = this.dogs.filter(h => h !== dog);
    this.dogService.deleteDog(dog.id).subscribe();
  }

}
