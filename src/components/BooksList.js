import { useSelector, useDispatch } from 'react-redux';
import { React, useEffect } from 'react';
import { getData } from '../redux/books/booksSlice';
import Book from './Books';

function BookList() {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  if (!Array.isArray(books)) {
    return null;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error occured</p>;
  }
  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
}
export default BookList;
