import './styles/Books.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delBook, delData } from '../redux/books/booksSlice';

function Book({ book }) {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(delBook(id));
    dispatch(delData(id));
  };
  return (
    <div className="books">
      <div>
        <p>Book_Title</p>
        <h2>{book.title}</h2>
        <p>
          Written by
          <span>{book.author}</span>
        </p>
        <p>
          <button type="submit" onClick={() => deleteHandler(book.item_id)}>Delete</button>
        </p>
      </div>
      <div>
        <p>Status</p>
      </div>
      <div>
        <p>Current Chapter</p>
        <h3>Chapter 03</h3>
        <button className="btn" type="submit">Progress</button>
      </div>
    </div>
  );
}
Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
