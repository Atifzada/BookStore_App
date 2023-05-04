import { Route, Routes } from 'react-router-dom';
import BooksList from './components/BooksList';
import Nav from './components/Navigation';
import AddBook from './components/NewBook';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/catergories" element={<p>Catergory</p>} />
      </Routes>
      <AddBook />
    </>
  );
}

export default App;
