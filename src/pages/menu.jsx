import React, { Component } from 'react'
import { MenuCard } from '../components/m-card';
// import { menu } from '../utils/fake-img';

export default class MenuOrders extends Component {
  state = {
    menus: [],
    key: false
  }

  componentDidMount() {
    this.props.onGetMenu()
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      menus: nextProps.menus
    })
  }
  render() {
    const { menus, auth } = this.props
    // console.log(menus)
    const mymenu = auth ? menus.map((v, i) => {
      return (
        <div className="col-3" key={i}>
          <MenuCard
            {...v}
            {...this.props}
          />
        </div>
      )
    }) : null
    return (
      <div className="menu">
        <div className="row">
          {mymenu}
        </div>
      </div>
    )
  }
}
