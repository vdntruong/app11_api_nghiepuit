import * as Types from '../constants/ActionTypes';
const initialState = { id: '', name: '', price: 0, status: false };

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case Types.GET_PRODUCT_BY_ID:
			state = { ...payload };
			return { ...state };
		default:
			return { ...state };
	}
};
