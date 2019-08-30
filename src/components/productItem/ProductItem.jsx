import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let { product, index } = this.props;
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={this.props.product.status ? 'badge badge-success' : 'badge badge-danger'}>{this.props.product.status ? 'Còn hàng' : 'Hết hàng'}</span>
        </td>
        <td>
          <div className="btn-group btn-group-sm" role="group">
            <button type="button" className="btn btn-warning"> Sửa </button>
            <button type="button" className="btn btn-danger"> Xóa </button>
          </div>
        </td>
      </tr>

    )
  }
}
