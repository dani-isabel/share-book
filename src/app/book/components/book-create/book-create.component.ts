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

  addNewBook() {
    this.booksManagerService.addNewBook({
        author: 'Diana Uribe',
        name: 'Brújula',
        description: 'explica el presente convulsionado por el que atraviesa la humanidad: los conflictos bélicos, el renacer de China y Rusia, la complejidad de los pueblos de Oriente...',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5bc003a17eb88c211953c7db/1544549468988-9Z9N3NBY7ALDWWGG1Y5F/ke17ZwdGBToddI8pDm48kIIECwOv_Rl5uoyoJfMbheh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oUUR7O7e563XGapvOF5StlVUygo3wAqMtNkeUqhF1S1Z/IMG-20181129-WA0006.jpg',
    });

    this.router.navigate(['/']);
  }
}
