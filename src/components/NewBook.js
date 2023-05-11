import React, { useState } from 'react';
import './styles/NewBook.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addBook, postData } from '../redux/books/booksSlice';

function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const addHandler = () => {
    if (title.trim() !== '' && author.trim() !== '') {
      dispatch(
        postData({
          item_id: nanoid(),
          title,
          author,
          // category: 'unknown',
        }),
        addBook({
          item_id: nanoid(),
          title,
          author,
          // category: 'unknown',
        }),
      );
      setTitle('');
      setAuthor('');
      setError('');
    } else {
      setError('Book Name and Writer should be provided');
    }
  };

  return (
    <form>
      <label htmlFor="titleInput">
        Title:
        <input type="text" id="titleInput" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label htmlFor="authorInput">
        Author:
        <input type="text" id="authorInput" value={author} onChange={(event) => setAuthor(event.target.value)} />
      </label>
      <button type="button" onClick={() => { addHandler(); }}> Add Book </button>
      <p>{error}</p>
    </form>
  );
}

export default NewBook;
