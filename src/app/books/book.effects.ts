import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import * as bookActions from './book.action';
import { BookService } from './book.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class BookEffects {
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      //Listen for actions of type "AddBook"
      ofType(bookActions.AddBook),

      //AddBookの呼び出しのたびに、bookserviseのaddBookが呼び出される？
      mergeMap((action) =>
        this.bookService.addBook(action).pipe(
          //addBook　success
          map((book) => bookActions.AddBookSuccess(book)),
          //addBook　failuer
          catchError((error) => of(bookActions.AddBookFailuer({ error })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private bookService: BookService) {}
}
