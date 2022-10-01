import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Book from "./Book";
import AddBook from "./AddBook";
import styles from "./BookList.module.css";

const BookList = () => {
    const [books, setBooks] = useState([
        { id: uuidv4(), title: "The Hobbit", author: "J.R.R. Tolkien" },
        { id: uuidv4(), title: "The Fellowship of the Ring", author: "J.R.R. Tolkien" },
        { id: uuidv4(), title: "The Two Towers", author: "J.R.R. Tolkien" },
    ]);
    
    return (
        <div className={styles['booklist-container']}>
            <ul className={styles['book-list']}>
                {books.map((book) => (
                    <li className={styles['book-item']} key={book.id}>
                        <Book title={book.title} author={book.author} />
                    </li>
                ))}
            </ul>
            <AddBook />
        </div>
    )
}
 
export default BookList;