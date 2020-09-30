import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book/components/book-list/book-list.component';
import { BookCreateComponent } from './book/components/book-create/book-create.component';

const routes: Routes = [
  { path: '', component: BookListComponent},
  { path: 'create', component:BookCreateComponent},
  // { path:'*', component: Not found}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
