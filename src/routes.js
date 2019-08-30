import React from 'react';
import HomePage from './pages/homePage/HomePage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import ProductListPage from './pages/productListPage/ProductListPage';
import ProductAddPage from './pages/productAddPage/ProductAddPage';

const routes = [
	{
		path: '/',
		exact: true,
		main: () => <HomePage />
	},
	{
		path: '/products',
		exact: false,
		main: () => <ProductListPage />
	},
	{
		path: '/product/add',
		exact: false,
		main: () => <ProductAddPage />
	},
	{
		path: '',
		exact: false,
		main: () => <NotFoundPage />
	}
];
export default routes;
