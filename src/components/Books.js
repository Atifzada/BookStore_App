import './styles/Books.css';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <div className="books" key={book.item_id}>
      <div>
        <p>Book</p>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>
          <button className="btn" type="submit">Edit</button>
          <button className="btn" type="submit">Remove</button>
          <button className="btn" type="submit">comment</button>
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
