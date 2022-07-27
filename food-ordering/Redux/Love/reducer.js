import { LOVE } from './types';

const INITIAL_STATE = {
  listLove: [],
};

const loveReducer = (state = INITIAL_STATE, action) => {
  const existInLove = state.listLove?.find((item) => item.id === action.payload?.id);
  switch (action.type) {
    case LOVE:
      if (existInLove) {
        const indexOfLove = state.listLove.indexOf(existInLove);
        state.listLove.splice(indexOfLove, 1);
        const newState = {
          ...state,
          listLove: [...state.listLove],
        };
        return newState;
      } else {
        const newState = {
          ...state,
          listLove: [
            ...state.listLove,
            {
              name: action.payload.name,
              id: action.payload.id,
            },
          ],
        };
        return newState;
      }

    default:
      return state;
  }
};

export default loveReducer;
