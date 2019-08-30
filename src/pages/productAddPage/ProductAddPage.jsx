import React, { Component } from 'react';

export default class ProductAddPage extends Component {
	render() {
		return (
			<div className="card col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<form className="card-body">
					<div className="form-group">
						<label>Tên sản phẩm</label>
						<input type="text" className="form-control" placeholder="nhập tên sản phẩm" />
						<small className="form-text text-muted">Đặt tên phải 'KÊU' mới có khách mua</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Gía sản phẩm</label>
						<input type="number" className="form-control" placeholder="nhập giá sản phẩm" />
						<small className="form-text text-muted">Buff gía cao là éo ai mua</small>
					</div>
					<div className="form-group form-check">
						<input type="checkbox" className="form-check-input" id="check" defaultChecked />
						<label className="form-check-label" htmlFor="check">
							Tình trạng (Còn/Hết)
						</label>
					</div>
					<button type="submit" className="btn btn-primary mr-2">
						Thêm mới
					</button>
					<button type="submit" className="btn btn-warning">
						Hủy bỏ
					</button>
				</form>
			</div>
		);
	}
}
