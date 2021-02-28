import React, {Component} from "react";
import Slider from "react-slick";
import FencingBlinds from "./fencingBlinds";
import MetalFence from "./metalFence";
import RanchoFence from "./ranchoMetalFence";
import WeldedGridFence from "./weldedGridFence";
import TemporaryFencing from "./temporaryFencing";
import "./sliderStyle.css";

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: "#333", borderRadius: "20px"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: "#333", borderRadius: "20px"}}
            onClick={onClick}
        />
    );
}

export default class AsNavFor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        function addHeaderStyle() {
            let fadeInUp = document.getElementsByClassName('fadeInUp')[0];
            fadeInUp.classList.add(".clickHeaderSlider");
        }

        let gatesImgStyle = document.getElementsByClassName("gatesImgStyle")[0];

        function addHoverStyle() {
            gatesImgStyle.classList.add("gatesNoHoverStyle");
        }

        return (
            <div>
                <div className="card text-white mb-3 cardBodyColor">
                    <div className=" cardBodyColor">
                        <div className="header_typeOfFence_home cardBodyColor">
                            <h2 className="card-title">Металеві паркани й огорожа у Львові та Львівській області</h2>
                            <h4 className="card-title">Ми виготовляємо якісні огорожі з металу!</h4>
                        </div>
                    </div>
                </div>
                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={2}
                    speed={150}
                    swipeToSlide={true}
                    focusOnSelect={true}>
                    <div>
                        <div className=" text-center fenceHeader fadeInUp">
                            <button
                                className=" GateshoverHR hoverHR marginSlider btn btn-dark">Паркан-жалюзі із
                                металевого профіля
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className=" text-center fenceHeader fadeInUp">
                            <button
                                className=" GateshoverHR hoverHR marginSlider btn btn-dark">Металевий
                                штахетник(Євроштахетник)
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className=" text-center fenceHeader fadeInUp">
                            <button className=" GateshoverHR hoverHR marginSlider btn btn-dark">Металевий
                                паркан Ранчо
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="text-center fenceHeader fadeInUp">
                            <button className=" GateshoverHR hoverHR marginSlider btn btn-dark">Паркан зі
                                зварної сітки
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="text-center fenceHeader fadeInUp">
                            <button className=" GateshoverHR hoverHR marginSlider btn btn-dark">Тимчасова
                                огорожа з металу
                            </button>
                        </div>
                    </div>
                </Slider>
                <hr/>
                <Slider
                    asNavFor={this.state.nav2}
                    nextArrow={<SampleNextArrow/>}
                    // fade={true}
                    prevArrow={<SamplePrevArrow/>}
                    ref={slider => (this.slider1 = slider)}>
                    <div>
                        {/*Паркан-жалюзі із металевого профіля*/}
                        <FencingBlinds/>
                    </div>

                    {/*Металевий штахетник(Євроштахетник)*/}
                    <div>
                        <MetalFence/>
                    </div>

                    {/*Металевий паркан РАНЧО*/}
                    <div>
                        <RanchoFence/>
                    </div>
                    {/*Паркан зі сварної сітки*/}
                    <div>
                        <WeldedGridFence/>
                    </div>

                    <div>
                        <TemporaryFencing/>
                    </div>
                </Slider>

            </div>
        );
    }
}