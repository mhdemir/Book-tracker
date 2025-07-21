// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent} from './book-list/book-list.component';
import { ChallengeDashboardComponent} from './challenge-dashboard/challenge-dashboard.component';

const routes: Routes = [
  { path: '', component: BookListComponent},
  { path: 'challenge', component: ChallengeDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Initialisiert den Router mit definierten Routen
  exports: [RouterModule]
})
export class AppRoutingModule { }
