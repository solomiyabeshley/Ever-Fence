import React, {Component} from "react";
import Slider from "react-slick";
import "./sliderStyle.css";
import "../App.css";
import Img1 from "./img/img1.jpg";
import Img2 from "./img/ral1014.jpg";
import Img3 from "./img/ral6005.jpg";
import Img4 from "./img/ral7024.jpg";
import Img5 from "./img/ral8019.jpg";
import Img6 from "./img/ral8017.jpg";
import Img7 from "./img/jaluzi-stolb1.jpg";
import Img8 from "./img/jaluzi-stolb2.jpg";
import Img9 from "./img/jaluzi-stolb3.jpg";
import Img10 from "./img/jaluzi-stolb4.jpg";
import Img11 from "./img/jaluzi-stolb5.jpg";

export default class FencingBlinds extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: dots => (
                <div
                    style={{
                        width: "98%",
                        backgroundColor: "white",
                        border: "1px solid black",
                        padding: "10px"
                    }}
                >
                    <ul style={{margin: "0px"}}> {dots} </ul>
                </div>
            ),
            customPaging: i => (
                <div
                    style={{
                        width: "50px",
                        fontSize: "20px",
                        color: "#333",
                    }}
                >
                    {i + 1}
                </div>
            )
        };
        return (
            <div>
                <h3>Паркани "ЖАЛЮЗІ" від Українського виробника</h3>
                <div className="GatesdescriptionAndInfo">
                    <div className="text_fenseDescription gates_fenseDescription fenceDescr">
                        <h4>Технічні характеристики</h4>
                        <p>Паркан "ЖАЛЮЗІ" виготовлений з якісного металевого
                            профілю, що дозволяє застосовувати його в зонах з підвищеною вологістю,
                            прибережних зонах. Додаткові ребра жорсткості
                            змонтовані на секціях дають можливість встановлення паркану висотою понад
                            2м,
                            при
                            цьому жорсткість панелі зберігається. Паркан жалюзі виготовляється з
                            оцинкованого
                            металу і забарвлюється полімерним порошковим покриттям або з вже
                            пофарбованого
                            оцинкованого металу, що дозволяє нам впевнено надавати гарантію на покриття
                            10
                            років.</p>
                        <p>Переважно огорожа "ЖАЛЮЗІ" використовується для приватних котеджів, де
                            загальний
                            екстер'єр території вимагає особливого підходу і дизайнерських рішень. Його
                            надійна конструкція і неповторний зовнішній вигляд обов'язково задовільнять
                            найвищі вимоги до огорожі і дозволяють вирішити питання із загальним
                            зовнішнім
                            виглядом Вашої ділянки.</p>
                    </div>
                    <div className="ol_fenseDescription gates_fenseDescription fenceDescr">
                        <img src={Img1} alt="" className="imgDetails_fenseDescription"/>
                        <ol>
                            <li><span className="num">1.</span><b>ЗВАРНИЙ МЕТАЛОКАРКАС</b> -
                                у заданий розмір,<br/> з труби профільної 40х20мм (оцинкована).
                            </li>
                            <li><span className="num">2.</span><b>ЛАМЕЛІ ПАРКАНУ ЖАЛЮЗІ</b> -
                                прокатаний металопрофіль із <br/> завальцюванням в полімерному
                                покритті.
                            </li>
                            <li><span className="num">3.</span><b>ДОБІРНІ ЕЛЕМЕНТИ</b> -
                                комплектуючі секції жалюзі з<br/> оцинкованого листового металу.
                            </li>
                            <li><span className="num">4.</span><b>МЕТАЛЕВИЙ СТОВП</b> -
                                з оцинкованої профільної <br/> труби 80х60мм.
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="colorsAndColumnsOfFence">
                    <div className="slider_color_of_Fence">
                        <h2>Найпопулярніші кольори</h2>
                        <br/>
                        <Slider {...settings}>
                            <div>
                                <h3>Коричневий шоколад:</h3>
                                <img src={Img6} alt="" className="color_of_Fence"/>
                            </div>
                            <div>
                                <h3>Графіт:</h3>
                                <img src={Img4} alt="" className="color_of_Fence"/>
                            </div>
                            <div>
                                <h3>Бежевий:</h3>
                                <img src={Img2} alt="" className="color_of_Fence"/>
                            </div>
                            <div>
                                <h3>Класичний зелений:</h3>
                                <img src={Img3} alt="" className="color_of_Fence"/>
                            </div>
                            <div>
                                <h3>Темно коричневий:</h3>
                                <img src={Img5} alt="" className="color_of_Fence"/>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider_color_of_Fence">
                        <h2>Варіанти стовпців</h2>
                        <br/>
                        <Slider {...settings}>
                            <div>
                                <h3>Стовпці з цегли:</h3>
                                <img src={Img7} alt="" className="columns_of_Fence"/>
                            </div>
                            <div>
                                <h3>Стовпці з блоків:</h3>
                                <img src={Img8} alt="" className="columns_of_Fence"/>
                            </div>
                            <div>
                                <h3>Стовпці з каменю:</h3>
                                <img src={Img9} alt="" className="columns_of_Fence"/>
                            </div>
                            <div>
                                <h3>Стовпці з модулів:</h3>
                                <img src={Img10} alt="" className="columns_of_Fence"/>
                            </div>
                            <div>
                                <h3>Металеві стовпці:</h3>
                                <img src={Img11} alt="" className="columns_of_Fence"/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        );
    }
}


