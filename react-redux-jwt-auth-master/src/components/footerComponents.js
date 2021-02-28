import React, {Component} from 'react';
import LogoImg from "../img/logo-design.jpg";
import {Link, Router} from "react-router-dom";
import {history} from "../helpers/history";
import "../App.css";

class FooterComponents extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <footer className="page-footer font-small stylish-color-dark pt-4">
                        <div className="container text-center text-md-left">
                            <div className="row">
                                <hr className="clearfix w-100 d-md-none"/>

                                <div className="weCanProposeYou">

                                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Ми можемо вам
                                        запропонувати:</h5>
                                    <div className="col-md-2 mx-auto">
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link to={"/metalFence"} className="nav-link navlinksStyle">Металевий
                                                    штахетник(Євроштахетник)</Link>
                                            </li>
                                            <li>
                                                <Link to={"/FencingBlinds"} className="nav-link navlinksStyle">Паркан-жалюзі
                                                    із металевого
                                                    профіля </Link>
                                            </li>

                                        </ul>
                                    </div>
                                    <hr className="clearfix w-100 d-md-none"/>
                                    <div className="col-md-2 mx-auto">
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link to={"/WeldedGridFence"} className=" nav-link navlinksStyle">Паркан
                                                    зі сварної сітки</Link>
                                            </li>
                                            <li>
                                                <Link to={"/TemporaryFencing"} className=" nav-link navlinksStyle">Тимчасова
                                                    огорожа з металу</Link>
                                            </li>
                                        </ul>

                                    </div>

                                    <hr className="clearfix w-100 d-md-none"/>

                                    <div className="col-md-2 mx-auto">

                                        <ul className="list-unstyled">
                                            <li>
                                                <Link to={"/RanchoFence"} className="nav-link navlinksStyle">Металевий
                                                    паркан РАНЧО</Link>
                                            </li>

                                            <li>
                                                <Link to={"/gatesAndWickets"} className="nav-link navlinksStyle">Металеві
                                                    ворота та хвіртки</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <img src={LogoImg} alt="#" className="styleOfLogo"/>

                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="footer-copyright text-center py-3">
                            <a href="http://localhost:8081/"> EverFence.com</a>
                        </div>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default FooterComponents;