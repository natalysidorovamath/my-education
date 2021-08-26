import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Book {
  constructor(public id: number, public name: string, public price: number, public discount: number) { }
}
@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    new Book(1, 'Joseph', 10, 6),
    new Book(2, 'Faradey', 5, 1),
    new Book(3, 'Garuy', 40, 7)
  ];

  constructor() { }
  getBooks() {
    return this.books;

  }
  addElementToBooks(elem: Book) {
    this.books.push(elem);
  }

}
