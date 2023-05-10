import { Route, Routes } from 'react-router-dom';
import BooksList from './components/BooksList';
import Nav from './components/Navigation';
import Categories from './components/Categories';
import NewBook from './components/NewBook';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <NewBook />
    </>
  );
}

export default App;
