import React from "react";
import styles from "./AddBook.module.css";

const AddBook = (props) => {
    // const { title, author, onTitleChange, onAuthorChange, onAddBook } = props;
    const { title, author } = props;
    
    return (
        <div className={styles['form-container']}>
            <h3 className={styles['form-title']}>Add new book</h3>
            <form className={styles.form} action="#">
                <input type="text" id="title" value={title} />
                <input type="text" id="author" value={author} />
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
};

export default AddBook;