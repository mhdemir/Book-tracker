// src/app/book.service.ts
import { Injectable } from '@angular/core';

// Das Book-Interface beschreibt die Eigenschaften eines Buches.
// So wissen wir genau, welche Daten ein Buchobjekt hat.
export interface Book {
  id: number;               // eindeutige ID des Buches (lokal vergeben)
  title: string;            // Buchtitel
  author: string;           // Autor/Autorin des Buches
  isbn: string;             // ISBN Nummer (für Cover-API und Identifikation)
  status: 'gelesen' | 'lese ich gerade' | 'geplant';  
  // ^ Lesestatus: "gelesen", "lese ich gerade", oder "geplant"
  rating?: number;          // Bewertung (1-5 Sterne) - optional
  category?: string;        // Kategorie/Genre (optional, z.B. "Fantasy", "Sachbuch")
}

@Injectable({
  providedIn: 'root'  // Der Service ist auf Root-Ebene verfügbar (Singleton in der App)
})
export class BookService {
  // Interne Liste mit Beispieldaten von Büchern
  private books: Book[] = [
    {
      id: 1,
      title: 'Zen spricht: Shouts of Nothingness', 
      author: 'Zhizhong Cai', 
      isbn: '0385472579', 
      status: 'gelesen',
      rating: 4,
      category: 'Philosophie'
    },
    {
      id: 2,
      title: 'Beispielbuch 2', 
      author: 'Max Mustermann', 
      isbn: '9780385533225', 
      status: 'lese ich gerade',
      rating: 5,
      category: 'Roman'
    },
    {
      id: 3,
      title: 'Beispielbuch 3', 
      author: 'Erika Muster', 
      isbn: '9780385472579', 
      status: 'geplant',
      // rating hier weggelassen, da noch nicht gelesen
      category: 'Science-Fiction'
    }
  ];

  constructor() { /* Konstruktor bleibt leer */ }

  // Methode liefert alle Bücher
  getAllBooks(): Book[] {
    return this.books;
  }

  // Bücher nach Status filtern, z.B. alle "gelesen" Bücher
  getBooksByStatus(status: Book['status']): Book[] {
    return this.books.filter(book => book.status === status);
  }

  // (Optionale weitere Methoden:)
  // z.B. neues Buch hinzufügen:
  addBook(book: Book): void {
    this.books.push(book);
  }
  // oder Buchstatus ändern (z.B. auf "gelesen" setzen) etc.
}
