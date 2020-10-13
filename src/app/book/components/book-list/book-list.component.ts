import { Component, OnInit } from '@angular/core';
import { IBooksList } from '../../models/books';

//Services
import { BooksManagerService } from '../../services/books-manager.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList: Array<IBooksList> = [];

  constructor(private booksManagerService: BooksManagerService) {}

  ngOnInit(): void {
    this.booksManagerService.bookList.subscribe(books => {
      this.bookList = books;
      console.log(books)});
  }
  addNewBookTest() {
    this.booksManagerService.addNewBook({
      author: 'Diana Uribe',
      description: 'baet',
      imageUrl: 'https://tiendateatral.com/8807-large_default/libro-brujula-para-el-mundo-contemporaneo.jpg',
      name: 'Brujula'
    });
  }
}
