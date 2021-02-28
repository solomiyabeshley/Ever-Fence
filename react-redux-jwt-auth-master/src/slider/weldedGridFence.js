import React, {Component} from "react";
import "./sliderStyle.css";
import Img0002 from "./img/3d.png";
import Img0003 from "./img/2d.png";
import Img0004 from "./img/city.png";
import Img0005 from "./img/img2.jpg";
import Img0006 from "./img/img3.jpg";
import Img0007 from "./img/img4.jpg";
// import Img12 from "./img/close.png";

export default class WeldedGridFence extends Component {
    render() {
        return (
            <div>
                <h3>Паркани зі званої сітки</h3>
                <div className="GatesdescriptionAndInfo">
                    <div className="text_fenseDescription gates_fenseDescription fenceDescr">
                        <h4>Технічні характеристики</h4>
                        <p><b>Паркани зі зварної сітки</b> з полімерним покриттям набирають усе більшої
                            популярності на
                            ринку огороджень України. Даний тип огорожі є найбільш збалансованим варіантом
                            по
                            співвідношенню ціна/якість. Секції паркану досить міцні, але при цьому дуже
                            легкі,
                            що значно скорочує витрати на установку.</p>
                        <p><b>Секції панельного паркану </b>зі зварної сітки виготовляють з оцинкованого
                            дроту,
                            звареної в кожному перетині, вкриті гарячим цинком або порошковою фарбою. Даний
                            вид
                            покриття забезпечує надійний захист від впливу навколишнього середовища й
                            гарантує
                            термін служби паркану не менше 10 років.</p>
                    </div>
                    <div
                        className="ol_fenseDescription gates_fenseDescription wicketDescription fenceDescr">
                        <ul>
                            <li><img src={Img0006} alt="" className="imgWeldedFence"/>
                                Паркан серії <b>«РУБІЖ» </b>3D - вид паркану зі зварної сітки який
                                найбільш
                                широко поширений і часто купується. Оптимальне співвідношення технічних
                                характеристик і вартості паркану 3D із сітки роблять даний тип огорожі
                                лідером
                                продажів. Він підходить як для житлових будинків, так і для промислових або
                                загальнодоступних об’єктів. Відмінною особливістю є наявність V-подібних
                                ребер
                                жорсткості по всій довжині секцій.
                            </li>
                            <hr/>
                            <li><img src={Img0007} alt="" className="imgWeldedFence"/>
                                Паркан серії <b>«КОЛЬЧУГА» </b>- найбільшого поширення набув у випадках
                                огородження
                                об’єктів із підвищеними вимогами до безпеки. У даному типі огорожі може бути
                                використаний дріт збільшеного діаметру, що значно підвищує характеристики
                                міцності та впливу механічних пошкоджень. Також, на відміну від серії РУБІЖ,
                                тут
                                відсутні V-подібні ребра жорсткості, що робить паркан абсолютно плоским і
                                значно
                                ускладнює завдання щодо його подолання ззовні.
                            </li>
                            <hr/>
                            <li><img src={Img0005} alt="" className="imgWeldedFence"/>
                                Паркан серії <b>«БАР'ЄР» </b>- типова міська огорожа. Зазвичай
                                виготовляються
                                невисокі
                                (до 1м). Особливістю даного паркану є наявність верхньої планки безпеки, для
                                запобігання випадкового травмування навколишніх людей. Наповненням для
                                даного
                                виду огорожі можуть виступати панелі секцій 3Д, парканів Рубіж і парканів
                                Бар’єр.ю економії
                                коштів і часу), прорахують вартість і назвуть час виготовлення.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tableWeldedFence">
                    <br/>
                    <br/>
                    <h3>Технічні характеристики огорожі зі зварної сітки</h3>
                    <table>
                        <thead>
                        <tr>
                            <th></th>
                            <th><img src={Img0002} alt="#"/> <h3>Зварні паркани серії РУБІЖ 3D</h3></th>
                            <th><img src={Img0003} alt="#"/><h3>Панельні паркани КОЛЬЧУГА</h3></th>
                            <th><img src={Img0004} alt="#"/><h3>Міські паркани серії БАР’ЄР</h3></th>
                        </tr>
                        </thead>
                        <thead>
                        <tr>
                            <th>Характеристика</th>
                            <th>«РУБІЖ»</th>
                            <th>«КОЛЬЧУГА»</th>
                            <th>«БАР'ЄР»</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Розмір комірки (bxh), мм</td>
                            <td>50х200 і 50х50</td>
                            <td>50х200</td>
                            <td>50х200</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Діаметр дроту d/D (D/d/D*), мм</td>
                            <td>1500; 2000</td>
                            <td>1500; 2000</td>
                            <td>1500; 2000</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Діаметр прутка, мм</td>
                            <td>3/4; 4/4; 5/5</td>
                            <td>5/4/5; 5/5/5; 6/5/6;</td>
                            <td>5/4/5; 5/5/5; 6/5/6;</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Довжина панелі, мм</td>
                            <td>2500 і 3000</td>
                            <td>2500 і 3000</td>
                            <td>2000 і 2500</td>
                        </tr>
                        <tr>
                            <td>Висота панелі, мм</td>
                            <td>620 - 3000</td>
                            <td>630 - 3000</td>
                            <td>670 - 1270</td>
                        </tr>
                        <tr>
                            <td>Відмінна особливість</td>
                            <td>Наявність поздовжнього ребра жорсткості</td>
                            <td>Здвоєний горизонтальний дріт</td>
                            <td>Захисна планка у верхній частині паркану</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    );
    }
    }
