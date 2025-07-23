// src/app/book-list/book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';

@Component({
  standalone:false,
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  gelesen: Book[] = [];
  leseIchGerade: Book[] = [];
  geplant: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.updateLists();
  }

  addBook(book: Book) {
    this.bookService.addBook(book);
    this.updateLists();
  }

  updateLists() {
    this.gelesen = this.bookService.getBooksByStatus('gelesen');
    this.leseIchGerade = this.bookService.getBooksByStatus('lese ich gerade');
    this.geplant = this.bookService.getBooksByStatus('geplant');
  }
}
