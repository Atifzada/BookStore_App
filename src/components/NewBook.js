import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/NewBook.css';

function AddBook({ onSubmit }) {
  const [bookName, setBookName] = useState('');
  const [writer, setwriter] = useState('');

  const submitHandle = (event) => {
    event.preventDefault();
    onSubmit({ bookName, writer });
    setBookName('');
    setwriter('');
  };

  return (
    <form onSubmit={submitHandle}>
      <label htmlFor="titleInput">
        Book Name:
        <input className="input" type="text" id="titleInput" value={bookName} onChange={(event) => setBookName(event.target.value)} placeholder="Enter book name" />
      </label>
      <label htmlFor="writer-input">
        Writer:
        <input className="input" type="text" id="writer-input" value={writer} onChange={(event) => setwriter(event.target.value)} placeholder="Enter writer name" />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
}

AddBook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default AddBook;
