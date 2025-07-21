import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { ChallengeDashboardComponent } from './challenge-dashboard/challenge-dashboard.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'challenge', component: ChallengeDashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ChallengeDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
