import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';
// import styles
import styles from './Categories.module.css';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(checkStatus());
  };

  return (
    <div className={styles['categories-container']}>
      <button type="submit" onClick={handleClick}>Check status</button>
      <h2>{status}</h2>
    </div>
  );
};

export default Categories;
