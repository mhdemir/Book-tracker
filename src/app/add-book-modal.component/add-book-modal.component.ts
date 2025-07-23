import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.css'],
    imports: [CommonModule, FormsModule] // ✅ das brauchst du!
})
export class AddBookModalComponent {
  @Output() bookAdded = new EventEmitter<any>();
  isOpen = false;

  title = '';
  author = '';
  category = 'Roman'; // Default-Wert
  loading = false;

  constructor(private http: HttpClient) {}

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.resetForm();
  }

  resetForm() {
    this.title = '';
    this.author = '';
    this.category = 'Roman';
  }

  async submit() {
    if (!this.title || !this.author || !this.category) return;

    this.loading = true;
    const coverUrl = await this.fetchCoverUrl(this.title, this.author);
    const newBook = {
      title: this.title,
      author: this.author,
      category: this.category,
      coverUrl: coverUrl
    };

    this.bookAdded.emit(newBook);
    this.loading = false;
    this.close();
  }

  async fetchCoverUrl(title: string, author: string): Promise<string | null> {
    const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}`;
    try {
      const data: any = await this.http.get(url).toPromise();
      const coverId = data?.docs?.[0]?.cover_i;
      if (coverId) {
        return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
      }
    } catch (err) {
      console.error('Fehler beim Laden des Covers:', err);
    }
    return null;
  }
}
