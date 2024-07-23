import { createStore } from 'redux';

const initialState = {
  reviewId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REVIEW_ID':
      return {
        ...state,
        reviewId: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
