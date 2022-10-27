import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDogComponent } from './new-dog.component';

describe('NewDogComponent', () => {
  let component: NewDogComponent;
  let fixture: ComponentFixture<NewDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
