// src/app/book-list/book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  // Arrays für die Buchlisten je nach Status
  gelesen: Book[] = [];
  leseIchGerade: Book[] = [];
  geplant: Book[] = [];

  constructor(private bookService: BookService) {
    // BookService wird injiziert, um auf die Buchdaten zugreifen zu können
  }

  ngOnInit(): void {
    // Beim Initialisieren der Komponente holen wir die gefilterten Buchlisten
    this.gelesen = this.bookService.getBooksByStatus('gelesen');
    this.leseIchGerade = this.bookService.getBooksByStatus('lese ich gerade');
    this.geplant = this.bookService.getBooksByStatus('geplant');
  }
}
