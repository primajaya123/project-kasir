import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Payment from './components/payment';
import MainRoutes from './routes';
import { signIn, checkAuth, getAllMenu, addNewMenu, deleteMenu } from './redux/actions';
import AdminPage from './pages/admin';
import MenuOrders from './pages/menu';

class App extends Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.onCheckAuth()
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.auth ?
                        this.props.admin ?
                            <div className="d-md-flex h-md-100">
                                <div className="p-0 col-md-8 bg-indigo h-md-100">
                                    <div className="content-body container">
                                        <div className="text-center">Menu Makanan</div>
                                        <MenuOrders {...this.props} />
                                    </div>
                                </div>
                                <div className="col-md-4 bg-dark fixed-right">
                                    <div className="text-light">
                                        <AdminPage {...this.props} />
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="d-md-flex h-md-100">
                                <div className="p-0 col-md-8 bg-indigo h-md-100">
                                    <div className="content-body container">
                                        <MainRoutes {...this.props} />
                                    </div>
                                </div>
                                <div className="col-md-4 bg-dark fixed-right">
                                    <div className="text-light">
                                        <Payment {...this.props} />
                                    </div>
                                </div>
                            </div>
                        :
                        <MainRoutes {...this.props} />
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.userReducers,
        ...state.menuReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (payload) => {
            return dispatch(signIn(payload))
        },
        onCheckAuth: () => {
            return dispatch(checkAuth())
        },
        onGetMenu: () => {
            return dispatch(getAllMenu())
        },
        onAddMenu: payload => {
            return dispatch(addNewMenu(payload))
        },
        onDeleteMenu: payload => {
            return dispatch(deleteMenu(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);