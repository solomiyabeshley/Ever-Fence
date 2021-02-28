import React, {Component} from 'react';

import QualityImg from "./img/guarantees/quality.png";
import clientImg from "./img/guarantees/client.png";
import budgetImg from "./img/guarantees/budget.png";
import sketchImg from "./img/guarantees/sketch.png";
import shippedImg from "./img/guarantees/shipped.png";
import wrenchImg from "./img/guarantees/wrench.png";
class Guarantees extends Component {
    render() {
        return (
                <div className="guaranteesHeader">
                    <div className='weGuarantYou_text'>
                        <h1>Ми гарантуємо вам</h1>
                    </div>
                    <div className="rowGuarantees">
                        <div className='guarantees_block'>
                            <img src={QualityImg} alt="" className='guarantees_icons'/>
                            <h4 className='guarantees_h3'>Високу якість</h4>
                        </div>
                        <div className='guarantees_block'>
                            <img src={clientImg} alt="" className='guarantees_icons'/>
                            <h4 className='guarantees_h3'>Професійну консультацію</h4>
                        </div>
                        <div className='guarantees_block'>
                            <img src={budgetImg} alt="" className='guarantees_icons'/>
                            <h4 className='guarantees_h3'>Розрахунок вартості паркану</h4>
                        </div>
                        <div className='guarantees_block'>
                            <img src={sketchImg} alt="" className='guarantees_icons'/>
                            <h4 className='guarantees_h3'>Проектування огорожі</h4>
                        </div>
                        <div className='guarantees_block'>
                            <img src={shippedImg} alt="" className='guarantees_icons'/>
                            <h4 className='guarantees_h3'>Доставку парканів</h4>
                        </div>
                        <div className='guarantees_block'>
                            <img src={wrenchImg} alt="" className='guarantees_icons'/>
                            <h4 className='guarantees_h3'>Монтаж огорожі</h4>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Guarantees;