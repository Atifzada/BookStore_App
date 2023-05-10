import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './styles/NewBook.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const addHandle = () => {
    // Check if title and author are not empty
    if (title.trim() !== '' && author.trim() !== '') {
      dispatch(
        addBook({
          item_id: nanoid(),
          title,
          author,
          category: 'unknown',
        }),
      );
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form>
      <label htmlFor="title-input">
        Title:
        <input
          type="text"
          id="title-input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label htmlFor="author-input">
        Author:
        <input
          type="text"
          id="author-input"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </label>
      <button
        type="button"
        onClick={() => {
          addHandle();
        }}
      >
        Add Book
      </button>
    </form>
  );
}

export default BookForm;
