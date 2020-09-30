import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookCreateComponent } from './components/book-create/book-create.component';

@NgModule({
  declarations: [BookListComponent, BookCreateComponent],
  imports: [CommonModule,SharedModule],
  exports: [BookListComponent,BookCreateComponent]
})
export class BookModule { }
