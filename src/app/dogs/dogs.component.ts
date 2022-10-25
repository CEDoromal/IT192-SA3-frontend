import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Petdog } from '../model/petdog';
import { PetdogService } from '../service/petdogservice';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: Petdog[] = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private petdogService: PetdogService) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.petdogService.getDogs()
    .subscribe(dogs => this.dogs = dogs);
  }

  add(name: string, breed: string, age: number, color: string, vaccinated: string,traits: string): void {
    name = name.trim();
    if (!name) { return; }
    this.petdogService.addPetdog({ name, breed, age, color, vaccinated, traits } as Petdog)
      .subscribe(dog => {
        this.dogs.push(dog);
      });
      
  }

  delete(dog: Petdog): void {
    this.dogs = this.dogs.filter(h => h !== dog);
    this.petdogService.deleteDog(dog.id).subscribe();
  }

}
