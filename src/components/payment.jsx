import React, { Component, Fragment } from 'react'

export default class Payment extends Component {

  render() {
    return (
      <Fragment>
        <div className="payment garis w-100 navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-nav">
            <div className="nav-item font-weight-light">Wed, Jul 22, 2019<br />10.48</div>
            <div className="nav-item font-weight-light">{localStorage.getItem('nama')}</div>
            <button className="btn btn-primary nav-item" onClick={(e) => {
              location.replace('/')
              localStorage.clear()
            }}>Logout</button>
          </div>
        </div>
        <div className="garis row p-2">
          <div className="col-md-4">
            <span className="text-secondary">Order Number</span>
            <br />
            <span className="text-white">D-0012</span>
          </div>
          <div className="col-md-4">
            <span className="text-secondary">Name</span>
            <br />
            <span className="text-white">Marry Doe</span>
          </div>
          <div className="col-md-4">
            <span className="text-secondary">Table</span>
            <br />
            <span className="text-white">A10 - 1st Floor</span>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col">
            <div className="row">
              <div className="col-6 text-secondary align-items-left">
                Sub Total
              </div>
              <div className="col-6 text-white align-items-right">IDR 20k</div>
            </div>
            <div className="row">
              <div className="col-6 text-secondary align-items-left">
                Discount
              </div>
              <div className="col-6 text-white align-items-right">-</div>
            </div>
            <div className="row">
              <div className="col-6 text-secondary align-items-left">
                Tax
              </div>
              <div className="col-6 text-white align-items-right">IDR 3k</div>
            </div>
            <div className="row">
              <div className="col-6 text-secondary align-items-left">
                Total
              </div>
              <div className="col-6 text-white align-items-right">IDR 23k</div>
            </div>
          </div>
        </div>
        <div className="p-5 mt-1">
          <div className="px-5 py-2 row justify-content-center">
            <button className="btn btn-outline-secondary btn-lg btn-block">CASH</button>
          </div>
          <div className="px-5 py-2 row justify-content-center">
            <button className="btn btn-outline-secondary btn-lg btn-block">DEBIT / KREDIT</button>
          </div>
        </div>
        <div className="p-5">
          <div className="px-5 row justify-content-center">
            <button className="btn btn-secondary btn-lg btn-block text-light">PURCHASE</button>
          </div>
        </div>
      </Fragment>
    );
  }
}
