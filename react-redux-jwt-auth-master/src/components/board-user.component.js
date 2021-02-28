import React, {Component} from "react";

import UserService from "../services/user.service";
import AsNavFor from "../slider/slider";
import GatesWicket from "../slider/gatesAndWickets";

import "../App.css";


export default class BoardUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserService.getUserBoard().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    render() {
        return (
            <div>
             <AsNavFor/>
              <GatesWicket/>
            </div>
        );
    }
}
