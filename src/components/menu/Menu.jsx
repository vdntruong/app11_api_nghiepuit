import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const menu = [{
  name: 'Trang chủ',
  to: '/',
  exact: true
}, {
  name: 'Quản lý sản phẩm',
  to: '/products',
  exact: false
}, {
  name: 'Thêm sản phẩm',
  to: '/product/add',
  exact: false
}]

export default class Menu extends Component {
  render() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <i className="nav-link disabled" tabIndex="-1" aria-disabled="true">
            <strong>Trang quản lý tùm lum</strong>
          </i>
        </li>
        {menu && menu.map((m, i) => {
          return (
            <li className='nav-item' key={i}>
              <NavLink className='nav-link' to={m.to} exact={m.exact} activeClassName='active'>
                {m.name}
              </NavLink>
            </li>)
        })}
      </ul>
    )
  }
}
