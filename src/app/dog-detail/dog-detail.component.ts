import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dog } from '../model/dog';
import { DogService } from '../service/dogservice';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {

  dog: Dog | undefined;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService,
  ) {}

  ngOnInit(): void {
    this.getDog();
  }

  getDog(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.dogService.getDog(id)
      .subscribe(dog => this.dog = dog)
  }

}
