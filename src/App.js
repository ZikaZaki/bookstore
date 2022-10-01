import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import styles from "./App.module.css";


function App() {
  return (
    <div className={styles['app-container']}>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} exact />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
