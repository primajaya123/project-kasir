import React, { Component } from 'react';
import { cilok } from '../utils/fake-img';

export const MenuCard = (props) => {
  return (
    <div className="card" key={props.id}>
      {
        props.admin ?
          <div className="d-item">
            <button className="btn btn-primary" onClick={e => {
              const data = {
                type: "edit_data",
                id: props.id,
                nama: props.nama,
                harga: props.harga,
                stok: props.stok,
                tipe: props.tipe,
                img: props.img
              }
              props.onEditData(data)
            }}>
              <i className="fas fa-edit"></i>
            </button>
            <button className="btn btn-danger" onClick={e => {
              props.onDeleteMenu({ id: props.id })
            }}>X</button>
          </div> : null
      }
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