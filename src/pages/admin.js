import React, { Component } from 'react'

export default class AdminPage extends Component {
  state = {
    id: '',
    nama: '',
    harga: 0,
    stok: 0,
    tipe: 'makanan',
    img: '',
    type: "",
    imageUrl: ''
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    e.preventDefault()
  }
  onChangeFile(e) {
    this.setState({
      img: URL.createObjectURL(e.target.files[0]),
      imageUrl: e.target.files[0]
    })
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      ...nextProps.DataMenu
    })
    if (!!nextProps.message.affectedRows) {
      if (nextProps.message.affectedRows === 1) {

        window.alert('Data berhasil ditambahkan')
      } else {
        window.alert('Data gagal ditambahkan')
      }
    }
  }
  render() {
    const { nama, harga, stok, tipe, imageUrl, type, id } = this.state
    return (
      <React.Fragment>
        <form onSubmit={(e) => {
          e.preventDefault()
          type === 'edit_data' ?
            this.props.onChangeMenu({ id, nama, harga, stok, tipe, imageUrl })
            :
            this.props.onAddMenu({ data: { nama, harga, stok, tipe, imageUrl }, type: tipe });
          this.setState({ type: '', img: '', nama: '', harga: 0, stok: 0, tipe: 'makanan' })
        }}>
          <div className="text-center">
            {
              type === 'edit_data' ?
                'Ubah Data Makanan' :
                'Tambah Data Makanan'
            }
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="nama">Nama</label>
            <input type="text" id="nama" className="form-control" value={this.state.nama} onChange={this.onChange.bind(this)} name="nama" />
          </div>
          <div className="form-group">
            <label htmlFor="harga">Harga</label>
            <input type="number" id="harga" className="form-control" value={this.state.harga} name="harga" onChange={this.onChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="stok">Stok</label>
            <input type="number" className="form-control" value={this.state.stok} name="stok" id="stok" onChange={this.onChange.bind(this)} />
          </div>
          <div className="form-group">
            <select name="tipe" id="tipe" className="form-control" value={this.state.tipe} onChange={this.onChange.bind(this)}>
              <option value="makanan">Makanan</option>
              <option value="minuman">Minuman</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1"></label>
            <img src={this.state.img} alt="" style={{ width: '100px' }} />
            <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={this.onChangeFile.bind(this)} />
          </div>
          <div className="form-group">
            <button type="submit" className="form-control btn btn-success">
              {
                this.state.type === 'edit_data' ?
                  "Ubah" : "Tambah"
              }
            </button>
          </div>

          {
            this.state.type === 'edit_data' ?
              <div className="form-group">
                <button className="form-control btn btn-secondary" onClick={e => {
                  this.setState({
                    nama: '',
                    harga: 0,
                    stok: 0,
                    tipe: 'makanan',
                    img: '',
                    type: ''
                  })
                }}>
                  batal
              </button>
              </div>
              : null
          }
        </form>
        <br /><br /><br /><br />
        <div className="text-center">
          <button className="btn btn-primary" onClick={e => {
            localStorage.clear()
            location.reload()
          }}>Logout</button>
        </div>
      </React.Fragment>
    )
  }
}
