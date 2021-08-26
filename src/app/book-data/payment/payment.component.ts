import { Component, OnInit, ViewChild, Output, ElementRef, EventEmitter } from '@angular/core';
import { Book, BookService } from 'src/app/book.service';
import { NgForm } from '@angular/forms';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  editMode = false;
  @ViewChild('f', { static: false }) slForm: NgForm;
  // @ViewChild('numberInput') numberInputRef:ElementRef;
  // @ViewChild('nameInput') nameInputRef:ElementRef;
  // @ViewChild('priceInput') priceInputRef:ElementRef;
  // @ViewChild('discountInput') discountInputRef:ElementRef;
  // @Output() consistanceAdded= new EventEmitter<Book>();
  constructor(private bookService: BookService) { }
  books: Book[];
  ngOnInit(): void {
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Book(value.number, value.name, value.price, value.discount);
    this.bookService.addElementToBooks(newIngredient);
    this.editMode = false;
    form.reset();
  }
  onSubmit(form: NgForm) {
    this.onAddItem(form);
  }
}
