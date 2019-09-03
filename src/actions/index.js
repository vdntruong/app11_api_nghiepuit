import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actFetchProducts = (payload) => ({
	type: Types.FETCH_PRODUCTS,
	payload
});
export const actFetchProductsRequest = () => {
	return (dispatch) => {
		return callApi('products', null).then((res) => {
			dispatch(actFetchProducts(res.data));
		});
	};
};

export const actDeleteProduct = (payload) => ({
	type: Types.DELETE_PRODUCT,
	payload
});
export const actDeleteProductRequest = (id) => {
	return (dispatch) => {
		return callApi(`products/${id}`, null, 'DELETE').then((res) => {
			if (res.status) dispatch(actDeleteProduct(id));
		});
	};
};

export const actAddProduct = (payload) => ({
	type: Types.ADD_PRODUCT,
	payload
});
export const actAddProductRequest = (data) => {
	return (dispatch) => {
		return callApi('products', data, 'POST').then((res) => {
			if (res.status === 201) return dispatch(actAddProduct(data));
		});
	};
};

export const actGetProductByID = (payload) => {
	return {
		type: Types.GET_PRODUCT_BY_ID,
		payload
	};
};
export const actGetProductByIDRequest = (id) => {
	return (dispatch) => {
		callApi(`products/${id}`, null).then((res) => {
			if (res.status === 200) dispatch(actGetProductByID(res.data));
		});
	};
};

export const actUpdateProduct = (payload) => ({
	type: Types.UPDATE_PRODUCT,
	payload
});
export const actUpdateProductRequest = (data) => {
	return (dispatch) => {
		return callApi(`products/${data.id}`, data, 'PUT').then((res) => {
			if (res.status === 200) dispatch(actUpdateProduct(res.data));
		});
	};
};
