// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Module für Formulare und Routing importieren
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component/app.component';
import { BookListComponent } from './book-list/book-list.component';
import { ChallengeDashboardComponent } from './challenge-dashboard/challenge-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ChallengeDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,        // für ngModel in Formularen
    AppRoutingModule    // unser Routing-Modul mit den Seiten
  ],
  providers: [],        // Services sind via @Injectable({providedIn:'root'}) schon eingebunden
  bootstrap: [AppComponent]  // Startkomponente der App
})
export class AppModule { }
