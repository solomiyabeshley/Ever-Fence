import React, { Component } from "react";
import  "../App.css";
// import  "../slider/sliderStyle.css";
import UserService from "../services/user.service";
import bestSeller from "../img/best-seller.png";
import cropTool from "../img/crop-tool.png";
import calendar from "../img/calendar.png";
import piggyBank from "../img/piggy-bank.png";
import Guarantees from "../slider/guarantees";
import Carouser from "../slider/carousel/carouser";
import {Link} from "react-router-dom";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div>
        <header className="publicContentHeader">
          <main className="main">
              <div className="row">
                <div className="main_features">
                  <h1>Огорожі / Паркани – виготовлення та монтаж від 40грн/метр!</h1>

                  <div className="row qualityRow">

                    <div>
                      <div className="main_features_block">
                        <div className="qualityCircle">
                          <img src={bestSeller} alt="" className="quality_icon"/>
                            <p>Висока <br/>якість</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="main_features_block">
                        <div className="qualityCircle">
                          <img src={cropTool} alt="" className="quality_icon"/>
                            <p>Швидке <br/>виготовлення</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="main_features_block">
                        <div className="qualityCircle">
                          <img src={calendar} alt="" className="quality_icon"/>
                            <p>Гарантія <br/>3 роки</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="main_features_block">
                        <div className="qualityCircle">
                          <img src={piggyBank} alt="" className="quality_icon"/>
                            <p>Доступна <br/>ціна</p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
          </main>
        </header>

        <hr/>
        <ul className="list-unstyled list-inline text-center py-2">
          <li className="list-inline-item">
            <h5 className="mb-1">Реєструйся й отримуй знижку 5%</h5>
          </li>
          <li className="list-inline-item">

            <Link to={"/register"}>
              <button className="btn btn-outline-dark"> Реєстрація</button>
            </Link>

          </li>
        </ul>
        <hr/>
        <div className=" text-white  mb-3">
        <div className="header_typeOfFence_home">
          <h2 className="card-title">Металеві паркани й огорожа у Львові та Львівській області</h2>
          <h4 className="card-title">Ми виготовляємо якісні огорожі з металу!</h4>
        </div>
        </div>
        <Carouser/>
        <hr/>
      <Guarantees/>
      </div>
  );}
  }
