import { Injectable } from '@angular/core';
import { BehaviorSubject, } from 'rxjs';
import { IBooksList } from '../models/books';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BooksManagerService {
  bookList = new BehaviorSubject<IBooksList[]>([]);
  
  constructor( private fireStore: AngularFirestore) {
    fireStore
    .collection('books')
    .valueChanges()
    .subscribe((books: Array<IBooksList>) => {
      this.bookList.next(books);
    })
  }

  getBookList() {
    return this.bookList;
  }

  addNewBook(newBook: IBooksList) {
    this.bookList.next([...this.bookList.getValue(), newBook]);
  }
}
