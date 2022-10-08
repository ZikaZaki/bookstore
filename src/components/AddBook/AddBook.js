import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
// import styles
import styles from './AddBook.module.css';

const AddBook = () => {
  const categories = useSelector((state) => state.categories.categories);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuidv4(),
      title,
      author,
      category,
    }));
    // clear form
    setTitle('');
    setAuthor('');
    setCategory('Action');
  };

  return (
    <div className={styles['form-container']}>
      <h1 className={styles['form-title']}>ADD NEW BOOK</h1>
      <form>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
          ;
        </select>
        <button type="submit" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
};

AddBook.prototype = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default AddBook;
