import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    return (
      <div className="card">
        {/* <div className="card-body"> */}
        <h5 className="card-header">Danh sách sản phẩm</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mã</th>
              <th scope="col">Tên</th>
              <th scope="col">Giá ($)</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.props.children}
          </tbody>
        </table>
        {/* </div> */}
      </div>

    )
  }
}
