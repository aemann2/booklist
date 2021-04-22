import { uid } from 'uid';

export const bookReducer = (state, action) => {
  // checking action type with a switch
  switch (action.type) {
    case 'ADD_BOOK':
      // return an array with a copy of the current state and a new object
      // w/ the data we get from the action
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uid(),
        },
      ];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    // a catch-all that just returns state
    default:
      return state;
  }
};
