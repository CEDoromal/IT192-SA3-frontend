import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'dogs/:id', component: DogDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
