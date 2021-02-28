import React, {Component} from "react";
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import "../App.css";

class Profile extends Component {

    render() {
        const {user: currentUser} = this.props;

        if (!currentUser) {
            return <Redirect to="/login"/>;
        }

        return (
            <div className="container">
                <header className="jumbotron">
                    <h2>
                        Аккаунт <strong>{currentUser.username} </strong>
                    </h2>
                </header>
                <div className="containTable">
                <table className="addStyleForUserTable tblStyle">
                    <thead className="tblStyle">
                    <tr className="tblStyle">
                        <th className="tblStyle"><strong>Id:</strong></th>
                        <th className="tblStyle"><strong>Email:</strong></th>
                        <th className="tblStyle"><strong>Token:</strong></th>

                    </tr>
                    </thead>
                    <tbody className="tblStyle">
                    <tr className="tblStyle">
                        <td className="tblStyle">{currentUser.id}</td>
                        <td className="tblStyle">{currentUser.email}</td>
                        <td className="tblStyle">{currentUser.accessToken.substring(0, 20)} ...{" "}
                            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div className="addPaddingButton"> </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(Profile);
