import React, {Component} from "react";
import {connect} from "react-redux";
import {Router, Switch, Route, Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import MetalFence from "./slider/metalFence";
import FencingBlinds from "./slider/fencingBlinds";
import RanchoFence from "./slider/ranchoMetalFence";
import WeldedGridFence from "./slider/weldedGridFence";
import TemporaryFencing from "./slider/temporaryFencing";
import gatesAndWickets from "./slider/gatesAndWickets";

import {logout} from "./actions/auth";
import {clearMessage} from "./actions/message";

import {history} from './helpers/history';


//img
import logoDesign from "./img/logo-design.jpg";
import callImg from "./img/call.png";
import wallClockImg from "./img/wall-clock.png";

class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };

        history.listen((location) => {
            props.dispatch(clearMessage()); // clear message when changing location
        });
    }

    componentDidMount() {
        const user = this.props.user;

        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }
    }

    logOut() {
        this.props.dispatch(logout());
    }

    render() {
        const {currentUser, showModeratorBoard, showAdminBoard} = this.state;

        return (
            <Router history={history}>
                <div>
                    <header className="header">
                        <div className="container">
                            <div className="row">

                                <div className="logo">
                                    <div className="logo_img">
                                        <img src={logoDesign} alt="#" className="logoStyleHeader"/>
                                    </div>
                                    <p>Виготовляємо огорожі під замовлення у Львові та Львівській області</p>
                                </div>
                                <div className="contact_us">
                                    <div className="contact_us_wrap">
                                        <p className="phone_number_style">+ 38(064)345-422-33</p>
                                        <div>
                                            <button type="button" className="btn btn-outline-dark phone_link">
                                                <img src={callImg} alt="#" className="contact_us_icon"/>
                                                Замовити зворотній дзвінок
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="working_hours">
                                    <div className="working_hours_img">
                                        <img src={wallClockImg} alt="#" className="working_hours_icon"/>
                                    </div>
                                    <p>Робочі дні:<br/>
                                        Пн-Сб<br/>
                                        <span><b>9:00 - 19:00</b></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="logo">
                            <Link to={"/"} className="navbar-brand">
                                Ever Fence
                            </Link>
                        </div>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link">
                                    Головна
                                </Link>
                            </li>
                            {currentUser && (
                                <li className="nav-item">
                                    <Link to={"/user"} className="nav-link">
                                        Інформація для користувача
                                    </Link>
                                </li>
                            )}
                        </div>
                        {currentUser ? (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={"/profile"} className="nav-link">
                                        {currentUser.username}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href={"/login"} className="nav-link" onClick={this.logOut}>
                                        Вихід
                                    </a>
                                </li>
                            </div>
                        ) : (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">

                                    <Link to={"/login"} className="nav-link">
                                        <button type="button" className="btn btn-outline-dark ">Увійти</button>
                                    </Link>

                                </li>

                                <li className="nav-item">

                                    <Link to={"/register"} className="nav-link">
                                        <button className="btn btn-outline-dark"> Реєстрація</button>
                                    </Link>

                                </li>
                            </div>
                        )}
                    </nav>
                    <div className="container mt-3">
                        <Switch>
                            <Route exact path={["/", "/home"]} component={Home}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route path="/user" component={BoardUser}/>
                            <Route path="/mod" component={BoardModerator}/>
                            <Route path="/admin" component={BoardAdmin}/>
                            <Route path="/metalFence" component={MetalFence}/>
                            <Route path="/FencingBlinds" component={FencingBlinds}/>
                            <Route path="/RanchoFence" component={RanchoFence}/>
                            <Route path="/WeldedGridFence" component={WeldedGridFence}/>
                            <Route path="/TemporaryFencing" component={TemporaryFencing}/>
                            <Route path="/gatesAndWickets" component={gatesAndWickets}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(App);
