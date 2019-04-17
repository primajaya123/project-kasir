import React, { Component } from 'react';
import { cilok } from '../utils/fake-img';

export const MenuCard = (props) => {
    return (
      <div className="card" key={props.id}>
        <div className="d-item">
          <button className="btn btn-primary">
            U
          </button>
        <button className="btn btn-danger" onClick={e => {
          props.onDeleteMenu({id: props.id})
        }}>X</button>
        </div>
        <img
          className="card-img-top"
          src={props.img ? props.img : cilok}
          alt="Card image cap"
          style={{
            height: '120px'
          }}
        />
        <div className="card-body">
          <div className="card-title font-weight-bold">{props.nama ? props.nama : 'none'}</div>
          <p className="card-text">
            {props.stok ? 'Stok ' + props.stok : 'Habis'}
          </p>
        <div className="card-footer">
            <div className="card-text font-weight-bold">{props.harga ? 'IDR ' + props.harga : 'IDR 0'}</div>
        </div>
        </div>
      </div>
    );
}