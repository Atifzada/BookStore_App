import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { delBook, delData } from '../redux/books/booksSlice';
import './styles/Books.css';

function Book({ book }) {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(delBook(id));
    dispatch(delData(id));
  };
  return (
    <section className="bookSection">
      <div className="books">
        <div className="mainDiv">
          <p className="bookCat">Book_Title</p>
          <h2 className="booksTitle">{book.title}</h2>
          <p className="bookAuthor">{book.author}</p>
          <p className="bookBtn">
            <button type="submit" className="btn-1">
              Comment
            </button>
            <span className="vl" />
            <button type="submit" className="btn-1" onClick={() => deleteHandler(book.item_id)}>
              Delete
            </button>
            <span className="vl" />
            <button type="submit" className="btn-1">Edit</button>
          </p>
        </div>

        <div className="PRO-CARD">
          <div className="circle">
            <div className="progressCircle" />
          </div>
          <div>
            <p className="progress">80%</p>
            <p className="status">Completed</p>
          </div>
          <div className="divider" />
          <div className="chapContainer">
            <div>
              <p className="chapLable">CURRENT CHAPTER</p>
              <p className="chap">Chapter 09</p>
            </div>
            <div>
              <Button className="proBtn">
                Update progress
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
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
