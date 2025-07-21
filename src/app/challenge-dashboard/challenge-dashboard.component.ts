// src/app/challenge-dashboard/challenge-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-challenge-dashboard',
  templateUrl: './challenge-dashboard.component.html',
  styleUrls: ['./challenge-dashboard.component.css']
})
export class ChallengeDashboardComponent implements OnInit {
  goal: number = 12;              // Ziel: z.B. 12 Bücher im Jahr
  booksReadCount: number = 0;     // Anzahl bereits gelesener Bücher (dieses Jahr)
  progressPercent: number = 0;    // Fortschritt in % (wird berechnet)

  // Für Lese-Sessions protokollieren:
  pagesToday: number | null = null;    // Eingabe: Seiten heute gelesen
  readingLog: { date: string, pages: number }[] = [];  // Array der geloggten Sessions

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    // Beim Laden des Dashboards zählen wir, wie viele Bücher als "gelesen" markiert sind
    const gelesenBuecher = this.bookService.getBooksByStatus('gelesen');
    this.booksReadCount = gelesenBuecher.length;
    // Fortschrittsprozentsatz berechnen (und auf ganze Zahl runden):
    this.progressPercent = Math.floor((this.booksReadCount / this.goal) * 100);
  }

  logReadingSession(): void {
    if (this.pagesToday != null && this.pagesToday > 0) {
      // heutiges Datum als String:
      const heute = new Date().toLocaleDateString();
      // Eintrag dem Log hinzufügen
      this.readingLog.push({ date: heute, pages: this.pagesToday });
      // Eingabefeld zurücksetzen
      this.pagesToday = null;
    }
  }
}
