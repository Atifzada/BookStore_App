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
          category: 'unknown',
        }),
      );
      dispatch(
        addBook({
          item_id: nanoid(),
          title,
          author,
          category: 'unknown',
        }),
      );
      setError('');
      setTitle('');
      setAuthor('');
    } else {
      setError('Book title and Author are required');
    }
  };

  return (
    <>
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
      </form>
      <p>{error}</p>
    </>
  );
}

export default NewBook;
