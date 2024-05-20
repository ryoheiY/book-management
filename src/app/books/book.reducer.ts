import { createReducer, on } from '@ngrx/store';
import {
  AddBook,
  RemoveBook,
  AddBookSuccess,
  AddBookFailuer,
} from './book.action';
import { Book } from '../models/book';

export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state) => {return state}),
  on(AddBookSuccess, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  on(AddBookFailuer, (state, {error}) => {
    console.error(error);
    return state;
  }),
  on(RemoveBook, (state, { bookId }) => {
    return state.filter((book) => book.id !== bookId);
  })
);
