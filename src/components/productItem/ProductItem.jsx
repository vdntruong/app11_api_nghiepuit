import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class ProductItem extends Component {

  handleDelete = (id) => {
    if (confirm('Xóa là mất đấy...')) { // eslint-disable-line
      this.props.onDeleteProduct(id);
    }
  }

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
            <Link className="btn btn-warning" to={`/product/edit/${product.id}`}> Sửa </Link>
            <button type="button" className="btn btn-danger" onClick={() => this.handleDelete(product.id)}> Xóa </button>
          </div>
        </td>
      </tr>

    )
  }
}
