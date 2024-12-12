import { GETCARTITEMS } from "./actionTypes";

export const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GETCARTITEMS:
      return payload;
    default:
      return state;
  }
};
