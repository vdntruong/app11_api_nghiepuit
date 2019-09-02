import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
export default class ProductAddPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			price: 0,
			status: true
		};
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
		let { name, price, status } = this.state;
		callApi(
			'products',
			{
				name,
				price,
				status
			},
			'POST'
		).then((res) => {
			console.log(res);
		});
	};
	clearAll = () => {
		this.setState({
			id: '',
			name: '',
			price: 0,
			status: true
		});
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
							defaultValue={price}
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
							defaultChecked={status}
							name="status"
							onChange={this.handleChange}
						/>
						<label className="form-check-label" htmlFor="check">
							Tình trạng (Còn/Hết)
						</label>
					</div>
					<button type="submit" className="btn btn-primary mr-2">
						Thêm mới
					</button>
					<button className="btn btn-warning" onClick={this.clearAll}>
						Hủy bỏ
					</button>
				</form>
			</div>
		);
	}
}
