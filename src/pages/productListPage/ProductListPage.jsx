import React, { Component } from 'react';
import ProductList from '../../components/productList/ProductList';
import ProductItem from '../../components/productItem/ProductItem';
import { connect } from 'react-redux';
import apiCaller from '../../utils/apiCaller';

class ProductListPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		};
	}

	componentDidMount() {
		apiCaller('products', null).then((res) => {
			this.setState({ products: [ ...res.data ] });
		});
	}

	render() {
		let { products } = this.props;
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<ProductList>
					{products &&
						products.map((p, i) => {
							return <ProductItem key={i} product={p} index={i} />;
						})}
				</ProductList>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		products: state.products
	};
};

export default connect(mapStateToProps, null)(ProductListPage);
