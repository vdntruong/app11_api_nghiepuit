import React, { Component } from 'react';

export default class NotFoundPage extends Component {
	render() {
		return (
			<div className="container mt-5">
				<div class="alert alert-danger" role="alert">
					Không tìm thấy trang. OKE
				</div>
			</div>
		);
	}
}
