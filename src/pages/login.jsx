import React, { Component } from 'react'

export default class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            auth: false,
            message: ''
        }
    }
    componentDidMount() {
        if (this.props.auth) {
            this.props.history.replace("/");
        }
    }

    componentWillReceiveProps(props, state) {
        !props.auth ?
            this.setState({ message: props.messageUser }) :
            location.reload()
    }


    render() {
        const textAlert = this.props.messageUser ?
            <div className="alert alert-danger">{this.state.message}</div> :
            null
        return (
            <div className="login-page w-100 h-100">
                <div className="h-100 row align-items-center">
                    <div className="col p-5">
                        <div className="card py-3 align-items-center">
                            <div className="text-center text-light">RM Khas Sunda</div>
                            <div className="text-center text-light">Dapur Aki</div>
                            <img src="https://www.kwsme.com/wp-content/uploads/2016/06/login-user-icon.png" alt="icon image" className="card-img-top" />
                            {textAlert}
                            <form onSubmit={(e) => {
                                this.props.onLogin(this.state)
                                e.preventDefault()
                            }}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">U</span>
                                            </div>
                                            <input type="text" className="form-control" name="username" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => {
                                                this.setState({
                                                    [e.target.name]: e.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">P</span>
                                            </div>
                                            <input type="password" name="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={(e) => {
                                                this.setState({
                                                    [e.target.name]: e.target.value
                                                })
                                            }} />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-success">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
