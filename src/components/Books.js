import './styles/Books.css';

function Books() {
  return (
    <div className="books">
      <div>
        <p>Book</p>
        <h2>In the Line of Fire</h2>
        <p>General R. Pervez Msharraf </p>
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

export default Books;
