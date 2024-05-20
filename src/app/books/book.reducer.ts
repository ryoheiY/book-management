import { createReducer, on } from '@ngrx/store';
import { AddBook, RemoveBook } from './book.action';
import { Book } from '../models/book';

export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  on(RemoveBook, (state, { bookId }) => {
    return state.filter((book) => book.id !== bookId);
  })
);
