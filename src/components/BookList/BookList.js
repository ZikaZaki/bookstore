import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/books/books';
import Book from '../Book/Book';
import AddBook from '../AddBook/AddBook';
// Import styles
import styles from './BookList.module.css';

const BookList = () => {
  // Get books from the store
  const books = useSelector((state) => state.books);
  // Get dispatch function
  const dispatch = useDispatch();
  // Get books from the API
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className={styles['booklist-container']}>
      <ul className={styles['book-list']}>
        {books && books.map((book) => (
          <li className={styles['book-item']} key={book.id}>
            <Book
              title={book.title}
              author={book.author}
              category={book.category}
              id={book.id}
            />
          </li>
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default BookList;
