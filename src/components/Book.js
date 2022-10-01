import React from "react";
import styles from "./Book.module.css";

const Book = (props) => {
    const { title, author } = props;
    return (
        <div className={styles['book-container']}>
            <div>
                <h1>{title}</h1>
                <h2>{author}</h2>
            </div>
            <button type="submit">Delete</button>
        </div>
    );
}
 
export default Book;