import { Component, OnInit } from '@angular/core';
import { BooksManagerService } from '../../services/books-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  constructor( 
    private booksManagerService:BooksManagerService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  addNewBook(author:string,name:string,description:string,imageUrl:string) {
    this.booksManagerService.addNewBook({
        author: author,
        name: name,
        description: description,
        imageUrl: imageUrl,
    });

    this.router.navigate(['/']);
  }
}
