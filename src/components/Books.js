import './styles/Books.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(delBook(id));
  };
  return (
    <div className="books">
      <div>
        <p>Book</p>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
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
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
