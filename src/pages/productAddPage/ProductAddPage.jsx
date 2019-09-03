import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductByIDRequest, actUpdateProductRequest } from '../../actions';
import { connect } from 'react-redux';

class ProductAddPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			price: 0,
			status: true
		};
	}

	componentDidMount() {
		if (this.props.match) {
			let { id } = this.props.match.params;
			this.props.onGetProductEdit(id);
		}
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps && nextProps.editingProduct) {
			this.setState({ ...nextProps.editingProduct });
		}
	}

	handleChange = (e) => {
		let { name, value } = e.target;
		if (name === 'status') value = e.target.checked;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let { history, match } = this.props;
		let { id, name, price, status } = this.state;
		if (match) {
			this.props.onUpdateProduct({ id, name, price, status });
			history.goBack();
		} else {
			this.props.onAddProduct({ id, name, price, status });
			history.goBack();
		}
	};

	render() {
		let { id, name, status, price } = this.state;
		return (
			<div className="card col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<form className="card-body" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Mã sản phẩm</label>
						<input
							type="text"
							className="form-control"
							placeholder="nhập tên sản phẩm"
							defaultValue={id}
							name="id"
							onChange={this.handleChange}
							readOnly={this.props.match ? true : false}
						/>
						<small className="form-text text-muted">Đặt mã phân biệt các sản phẩm</small>
					</div>
					<div className="form-group">
						<label>Tên sản phẩm</label>
						<input
							type="text"
							className="form-control"
							placeholder="nhập tên sản phẩm"
							defaultValue={name}
							name="name"
							onChange={this.handleChange}
						/>
						<small className="form-text text-muted">Đặt tên phải 'KÊU' mới có khách mua</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Gía sản phẩm</label>
						<input
							type="number"
							className="form-control"
							placeholder="nhập giá sản phẩm"
							value={price}
							name="price"
							onChange={this.handleChange}
						/>
						<small className="form-text text-muted">Buff gía cao là éo ai mua</small>
					</div>
					<div className="form-group form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="check"
							checked={status}
							name="status"
							onChange={this.handleChange}
						/>
						<label className="form-check-label" htmlFor="check">
							Tình trạng (Còn/Hết)
						</label>
					</div>
					<button type="submit" className="btn btn-primary mr-2">
						{this.props.match ? 'Lưu' : 'Thêm mới'}
					</button>
					<Link to="/product-list" className="btn btn-warning">
						Hủy bỏ
					</Link>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	editingProduct: state.editingProduct
});
const mapDispathToProps = (dispatch, props) => ({
	onAddProduct: (product) => {
		dispatch(actAddProductRequest(product));
	},
	onGetProductEdit: (id) => {
		dispatch(actGetProductByIDRequest(id));
	},
	onUpdateProduct: (product) => {
		dispatch(actUpdateProductRequest(product));
	}
});
export default connect(mapStateToProps, mapDispathToProps)(ProductAddPage);
