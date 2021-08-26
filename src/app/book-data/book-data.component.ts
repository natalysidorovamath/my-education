import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../book.service';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.scss']
})
export class BookDataComponent implements OnInit {
  books: Book[];
  selectedBooks: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();

  }


}
