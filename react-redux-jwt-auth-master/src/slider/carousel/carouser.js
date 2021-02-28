import React, {Component} from 'react';
import "../sliderStyle.css"
import image_1 from "./img/image_1.jpg";
import image_2 from "./img/image_2.jpg";
import image_3 from "./img/image_3.jpg";
import image_4 from "./img/image_4.jpg";
import image_5 from "./img/image_5.jpg";
import image_6 from "./img/image_6.jpg";
import image_7 from "./img/image_7.jpg";
import image_8 from "./img/image_8.jpg";
import image_9 from "./img/image_9.jpg";
import image_10 from "./img/image_10.jpg";
import image_11 from "./img/image_11.jpg";
import image_12 from "./img/image_12.jpg";
import image_13 from "./img/image_13.jpg";
import image_14 from "./img/image_14.jpg";
import image_15 from "./img/image_15.jpg";
import image_16 from "./img/image_16.jpg";
import image_17 from "./img/image_17.jpg";
import image_18 from "./img/image_18.jpg";

export default class Carouser extends Component {
    render() {
        return (
            <div>
                <main>
                    <div className="container marketing">
                        <hr/>
                        <div className="row">
                            <div className="col-lg-4">
                                <img src={image_17} alt="#" className="carouselImgSmall"/>


                                <h5>Ефективне планування будівництва</h5>
                                <p className="carouselText_p">Якщо ще будівля на ділянці не побудована, то наша компанія
                                    рекомендує будувати паркан
                                    з дотриманням вимог безпеки.
                                    Купуючи ділянку землі для майбутньої споруди будинку більшість господарів в першу
                                    чергу вирішують звести паркан з різних причин. Хтось бажає відразу виділити кордону
                                    приватній території, хтось забезпечити захист будівельних матеріалів від вандалів. І
                                    тут-то деякі допускають грубі помилки, особливо якщо порадитися ні з ким. У цій
                                    статті ми хочемо застерегти майбутніх і нинішніх домовласників від упущень.
                                    Дані заходи обережності потрібні не просто так. Надалі, при початковому облаштуванні
                                    майбутнього будинку або інших великих будівель всередині двору, необхідно буде, щоб
                                    всередину заїжджали середні, великі або навіть особливо великі вантажні автомобілі.
                                    Погодьтеся, що при будівництві підстави, необхідно забезпечити під'їзд траншейному
                                    екскаватора, великої бетономішалці з цементним розчином для заливки фундаменту
                                    будинку, вантажівки з автокраном для підвезення і укладання залізобетонних
                                    перекриттів і інших будівельних матеріалів.</p>
                            </div>
                            <div className="col-lg-4">
                                <img src={image_16} alt="#" className="carouselImgSmall"/>

                                <h5>Секції жалюзі - незвичне застосування</h5>
                                <p className="carouselText_p">Секції з заповненням жалюзі використовують архітектори та
                                    дизайнери в своїх роботах,
                                    знайшовши їм широке застосування і як окремим інженерним спорудам, і як додаткових
                                    елементів екстер'єру та інтер'єру. У переліку використання панелей жалюзі наведемо
                                    приклади, як їх наші клієнти використовують:

                                    декоративно-захисні короби для кондиціонерів і спліт систем;
                                    панелі і фальш панелі, що закривають ніші на фасадах сучасних будівель;
                                    секції жалюзі для обладнання альтанок в сучасному стилі;
                                    кабінки жалюзі для комфортного обладнання пляжних територій;
                                    огорожу балконів, периметрів мансардних поверхів;
                                    розділові панелі жалюзі для зонування території в інтер'єрі та екстер'єрі;
                                    в якості декоративних огорож периметра вуличної зони ресторанних комплексів;
                                    конструкції жалюзі огорож для обладнання зони сміттєвих баків;
                                    для заповнення віконних прорізів у будівлях, на фермах.</p>
                            </div>
                            <div className="col-lg-4">
                                <img src={image_18} alt="#" className="carouselImgSmall"/>
                                <h5>Структура, текстура, фактура металевого паркану</h5>
                                <p className="carouselText_p">Текстура металевого паркану - це візуально внутрішню
                                    будову матеріалу, тобто те, з
                                    чого складається і виготовлений паркан, точніше будова металу. Текстуру металу можна
                                    поспостерігати, вивчивши неозброєним оком злам металевої деталі, а також за
                                    допомогою найпростішого збільшувального приладу, лупи або мікроскопа.

                                    Текстура виникає в результаті лиття, пластичної деформації і відпалі, тобто процеси
                                    виробництва надають їй певну текстуру. Для того, щоб візуально побачити текстуру
                                    металу, його розрізають уздовж і видима поверхня твердого металу ознайомить з
                                    текстурою. Про остаточної текстурі металу можна судити тільки після застосування
                                    повного виробничого циклу з обробки даного металу.</p>
                            </div>

                        </div>
                        <hr/>
                        <h2>ОСТАННІ ОБ'ЄКТИ ВИКОНАНІ НАШИМ ПІДПРИЄМСТВОМ</h2>
                        <hr className="featurette-divider"/>

                        <div className="row featurette">
                            <div className="col-md-7">
                                <h2 className="featurette-heading">Фігурні вставки з металу в секцію паркану</h2>
                                <img src={image_2} alt="#" className="small_imageCarousel"/>
                                <img src={image_3} alt="#" className="small_imageCarousel"/>
                                <img src={image_4} alt="#" className="small_imageCarousel"/>
                            </div>
                            <div className="col-md-5">
                                <img src={image_1} alt="#" className="imageCarousel"/>

                            </div>
                        </div>

                        <hr className="featurette-divider"/>

                        <div className="row featurette">
                            <div className="col-md-7 order-md-2">
                                <h2 className="featurette-heading ">Встановлення огорожі жалюзі на схилі</h2>
                                <img src={image_6} alt="#" className="small_imageCarousel carouselImg_margin"/>
                                <img src={image_7} alt="#" className="small_imageCarousel"/>
                                <img src={image_8} alt="#" className="small_imageCarousel"/>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <img src={image_5} alt="#" className="imageCarousel"/>

                            </div>
                        </div>

                        <hr className="featurette-divider"/>

                        <div className="row featurette">
                            <div className="col-md-7">
                                <h2 className="featurette-heading">Горизонтальний штакет і паркан жалюзі</h2>
                                <p>
                                    <img src={image_9} alt="#" className="small_imageCarousel carouselImg_margin"/>
                                    <img src={image_10} alt="#" className="small_imageCarousel"/>
                                    <img src={image_12} alt="#" className="small_imageCarousel"/>
                                </p>
                            </div>
                            <div className="col-md-5">
                                <img src={image_11} alt="#" className="imageCarousel"/>
                            </div>
                        </div>
                        <hr className="featurette-divider"/>

                        <div className="row featurette">
                            <div className="col-md-7 order-md-2">
                                <h2 className="featurette-heading ">Огорожа -жалюзі з бетонними стовпами</h2>
                                <img src={image_15} alt="#" className="small_imageCarousel carouselImg_margin"/>
                                <img src={image_14} alt="#" className="small_imageCarousel"/>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <img src={image_13} alt="#" className="imageCarousel"/>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        )
    }
}