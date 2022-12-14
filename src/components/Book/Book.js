import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
// import styles
import styles from './Book.module.css';

const Book = ({
  id,
  title,
  author,
  category,
}) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className={styles['book-card']}>
      <div className={styles['book-info']}>
        <div className={styles['book-details']}>
          <h2 className={styles.category}>{category}</h2>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.author}>{author}</h3>
        </div>
        <div className={styles['book-actions']}>
          <button className={styles['book-action']} type="button">Comments</button>
          <span className={styles['vertical-line2']} />
          <button className={styles['book-action']} type="button" onClick={handleRemove}>Remove</button>
          <span className={styles['vertical-line2']} />
          <button className={styles['book-action']} type="button">Edit</button>
        </div>
      </div>
      <div className={styles['book-progress']}>
        <div className={styles['progress-container']}>
          <div className={styles['circular-progress']}>
            <div className={styles['circular-progress-percentage']}>
              <span>64%</span>
              <br />
              <span>Completed</span>
            </div>
          </div>
          <div className={styles['book-progress-percentage']}>
            <span>64%</span>
            <br />
            <span className={styles.completed}>Completed</span>
          </div>
        </div>
      </div>
      <span className={styles['vertical-line1']} />
      <div className={styles['book-chapter']}>
        <h3 className={styles['book-current-chapter']}>CURRENT CHAPTER</h3>
        <h3 className={styles['book-chapter-number']}>Chapter 17</h3>
        <button className={styles['book-chapter-update']} type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
