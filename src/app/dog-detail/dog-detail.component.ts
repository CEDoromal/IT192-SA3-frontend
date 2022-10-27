import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../model/dog';
import { DogService } from '../service/dogservice';
import { AccountService } from '../service/accountservice';
import { Account } from '../model/account';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {

  isAdmin: boolean = false;
  dog: Dog | undefined;

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
    this.getDog();
  }

  getDog(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.dogService.getDog(id)
      .subscribe(dog => this.dog = dog)
  }

  save(): void {
    if (this.dog) {
      this.dogService.updateDog(this.dog)
        .subscribe(()=> this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

}
