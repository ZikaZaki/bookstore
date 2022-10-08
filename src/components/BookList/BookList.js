import React from 'react';
import { useSelector } from 'react-redux';
// import booksReducer from '../../redux/books/books';
import Book from '../Book/Book';
import AddBook from '../AddBook/AddBook';
import styles from './BookList.module.css';

const BookList = () => {
  const books = useSelector((state) => state.books);

  // function getInitialBooks() {
  //   const books = booksReducer(undefined, { type: 'books/GET_BOOKS' });
  //   if (books) {
  //     return books;
  //   }
  //   return [];
  // }

  // const [books] = useState(getInitialBooks());

  return (
    <div className={styles['booklist-container']}>
      <ul className={styles['book-list']}>
        {books && books.map((book) => (
          <li className={styles['book-item']} key={book.id}>
            <Book title={book.title} author={book.author} category={book.category} id={book.id} />
          </li>
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default BookList;
