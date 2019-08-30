import React, { Component } from 'react'
import ProductList from '../../components/productList/ProductList';
import ProductItem from '../../components/productItem/ProductItem';

export default class ProductListPage extends Component {
  render() {
    let products = [{
      id: 'ST-50',
      name: 'SHBDN',
      price: 500,
      status: true
    }, {
      id: 'SM-41',
      name: 'SHBDN',
      price: 450,
      status: false
    }];
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <ProductList>
          {products && products.map((p, i) => {
            return <ProductItem key={i} product={p} index={i} />
          })}
        </ProductList>
      </div>
    )
  }
}
