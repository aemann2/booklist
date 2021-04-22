import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li
      // we're using id: as a key because we're looking for action.id in reducer
      onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}
    >
      <div className='title'>{book.title}</div>
      <div className='title'>{book.author}</div>
    </li>
  );
};

export default BookDetails;
