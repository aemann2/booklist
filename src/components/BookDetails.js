import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails = ({ book, key }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li key={key} onClick={() => removeBook(book.id)}>
      <div className='title'>{book.title}</div>
      <div className='title'>{book.author}</div>
    </li>
  );
};

export default BookDetails;
