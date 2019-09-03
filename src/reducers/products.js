import * as Types from '../constants/ActionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.FETCH_PRODUCTS:
      state = payload;
      return [...state];
    case Types.DELETE_PRODUCT:
      state = state.filter(p => p.id !== payload);
      return [...state];
    case Types.ADD_PRODUCT:
      state.push({ ...payload });
      return [...state]
    case Types.UPDATE_PRODUCT:
      state = state.map(p => {
        return p.id === payload.id ? { ...payload } : p;
      });
      return [...state]
    default:
      return [...state];
  }
};
