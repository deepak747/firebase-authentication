
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book!: Book;
  // @Output() bookEmitter= new EventEmitter<Book>()
  
  isInCart:boolean=false
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  addToCard(){
    this.isInCart=true;
     this.cartService.add(this.book);
    // this.bookEmitter.emit(this.book);
  }

  removeFromCard(){
    this.isInCart=false;
    this.cartService.remove(this.book)
  }

}
