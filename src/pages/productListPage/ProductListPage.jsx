import React, { Component } from 'react';
import ProductList from '../../components/productList/ProductList';
import ProductItem from '../../components/productItem/ProductItem';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions';

class ProductListPage extends Component {
	componentDidMount() {
		this.props.fetchAllProducts();
	}

	handleDeleteProduct = (id) => {
		this.props.onDeleteProduct(id);
	};

	render() {
		let { products } = this.props;
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<ProductList>
					{products &&
						products.map((p, i) => {
							return (
								<ProductItem key={i} product={p} index={i} onDeleteProduct={this.handleDeleteProduct} />
							);
						})}
				</ProductList>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.products
});
const mapDispatchtoProps = (dispatch, props) => ({
	fetchAllProducts: () => {
		dispatch(actFetchProductsRequest());
	},
	onDeleteProduct: (id) => {
		dispatch(actDeleteProductRequest(id));
	}
});
export default connect(mapStateToProps, mapDispatchtoProps)(ProductListPage);
