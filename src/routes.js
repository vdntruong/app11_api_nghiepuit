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
		path: '/product-list',
		exact: false,
		main: () => <ProductListPage />
	},
	{
		path: '/product/add',
		exact: false,
		main: ({ history }) => <ProductAddPage history={history} />
	},
	{
		path: '/product/edit/:id',
		exact: false,
		main: ({ match, history }) => <ProductAddPage history={history} match={match} />
	},
	{
		path: '',
		exact: false,
		main: () => <NotFoundPage />
	}
];
export default routes;
