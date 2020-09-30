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

  constructor(private booksManagerService: BooksManagerService) {
    this.bookList = booksManagerService.getBookList();
   }

  ngOnInit(): void {
  }

}
