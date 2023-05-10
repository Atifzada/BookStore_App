import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Books';
// import AddBook from './NewBook';

function BooksList() {
  const { books } = useSelector((state) => state.books);

  if (!Array.isArray(books)) {
    return null;
  }

  return (
    <>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </>
  );
}
export default BooksList;
