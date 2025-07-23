import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { ChallengeDashboardComponent } from './challenge-dashboard/challenge-dashboard.component';
import { AddBookModalComponent } from './add-book-modal.component/add-book-modal.component';
import { AppRoutingModule } from './app-routing-module';

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
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AddBookModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
