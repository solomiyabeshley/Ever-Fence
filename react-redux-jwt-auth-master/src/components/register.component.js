import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";

import {register} from "../actions/auth";
import {connect} from "react-redux";
import {REGISTER_SUCCESS, SET_MESSAGE} from "../actions/types";
import {Redirect} from "react-router-dom";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Заповніть це поле!
            </div>
        );
    }
};

const email = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                email введено некоректно!
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                Логін повинен містити від 3 до 20 символів!
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                Пароль повинен містити від 3 до 20 символів!
            </div>
        );
    }
};

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            successful: false,
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            successful: false,
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.props
                .dispatch(
                    register(this.state.username, this.state.email, this.state.password)
                )
                .then(() => {
                    this.setState({
                        successful: true,
                        type: REGISTER_SUCCESS,
                    });
                })
                .catch(() => {
                    this.setState({
                        successful: false,
                    });
                });
        }
    }

    render() {
        const {message} = this.props;
        return (
            <div className="col-md-12">
                <div className="">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />

                    <Form
                        onSubmit={this.handleRegister}
                        ref={(c) => {
                            this.form = c;
                        }}
                    >
                        {!this.state.successful && (
                            <div>
                                <div className="form-group formLogin">
                                    <label htmlFor="username">Логін:</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                        validations={[required, vusername]}
                                    />
                                </div>

                                <div className="form-group formLogin">
                                    <label htmlFor="email">Email:</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                        validations={[required, email]}
                                    />
                                </div>

                                <div className="form-group formLogin">
                                    <label htmlFor="password">Пароль:</label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        validations={[required, vpassword]}
                                    />
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-dark blackBC_auth formLoginSubmit">Зареєструватись</button>
                                </div>
                            </div>
                        )}

                        {message && (
                            <div className="form-group">
                                <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"}
                                     role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{display: "none"}}
                            ref={(c) => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                    <div className="addPaddingButton"> </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {message} = state.message;
    return {
        message,
    };
}

export default connect(mapStateToProps)(Register);
