import React, { useState } from 'react';
import './styles/NewBook.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
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
      <section className="formSection">
        <div className="formDiv">
          <div className="footerDiv" />
        </div>
        <h2 className="formTitle">ADD NEW BOOK</h2>
        <form className="form">
          <label htmlFor="inputTitle">
            <input className="bookTitle" placeholder="Book Title" type="text" id="bookTitle" value={title} onChange={(event) => setTitle(event.target.value)} />
          </label>
          <label htmlFor="inputAuthor">
            <input className="author" placeholder="Author" type="text" id="author" value={author} onChange={(event) => setAuthor(event.target.value)} />
          </label>
          <Button className="formBtn" type="button" onClick={() => { addHandler(); }}>
            Add New Book
          </Button>
          <span>{error}</span>
        </form>
      </section>

    </>
  );
}

export default NewBook;
