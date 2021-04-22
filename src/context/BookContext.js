import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  // we're now using the dispatch to set the state (rather than setBooks)
  // for useReducer, we pass in 2 params: the reducer we want to use, and the initial value of the piece of state
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    // we're providing books (because it's a state), and also the dispatch, because that's what we use to set the state of the books. with the dispatch passed down through the value, all the children will now have access to the state changing methods that live in the reducer
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
