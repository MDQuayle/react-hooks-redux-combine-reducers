import { combineReducers } from "redux";
import authorsReducer from "./features/books/authors/AuthorSlice.js";
import booksReducer from "./features/books/books/booksSlice";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
});

export default rootReducer; 