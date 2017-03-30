import { Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './views/user.view.html'
})
export class UserComponent {
  name: string;
  phone: string;
  books: Array<book>;

  constructor() {
    this.books = [];
    this.name = "amine";
    this.phone = "0670739274";
    let book1 = {
      id: 1,
      title: 'book1',
      price: 100
    };
    let book2 = {
      id: 1,
      title: 'book2',
      price: 85
    };
    let book3 = {
      id: 1,
      title: 'book3',
      price: 14
    };
    this.books.push(book1);
    this.books.push(book2);
    this.books.push(book3);
    console.log(this.books);
  }

}

interface book {
  id: number;
  title: string;
  price: number;
}