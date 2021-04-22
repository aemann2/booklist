import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          placeholder='Book title'
          name='title'
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='author'>Author:</label>
        <input
          type='text'
          placeholder='Book Author'
          name='author'
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input type='submit' value='Add Book' />
      </form>
    </div>
  );
};

export default BookForm;
