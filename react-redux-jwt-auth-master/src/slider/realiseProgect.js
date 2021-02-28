// import React, {Component} from 'react';
// import "./styleLess.css";
// class CarouselProgect extends Component {
//     render() {
//         $(document).ready(function() {
//
//             $('#box-slider').each(function() {
//
//                 var self = $(this),
//                     get_item = $('#box-slider .item'),
//                     get_item_length = get_item.length,
//                     indicators = $('#box-slider .carousel-indicators'),
//                     index = "0";
//
//                 for (index; index < get_item_length; index++) {
//                     indicators.append('<li data-target="#slider" data-slide-to=" ' + index + ' "></li>');
//                 }
//
//                 indicators.find('li:first').addClass('active');
//                 get_item.first().addClass('active');
//
//                 get_item.each(function(i) {
//                     get_item_name = $(this).find('img').data('name');
//
//                     indicators.find('li:eq(' + i + ')').html(get_item_name);
//                 });
//
//                 self.each(function() {
//
//                     var slideIndex = $(this).find('li.active').text();
//                     $('#indicatorsTitle').append('<h4>' + slideIndex + '</h4>');
//
//                     self.on('slid.bs.carousel', function() {
//
//                         slideIndex = $(this).find('li.active').text();
//                         $('#indicatorsTitle h4').html(slideIndex);
//
//                     });
//                 });
//
//                 $('#btnToggleIndicators').on('click', function() {
//                     $('.indicators-box').toggleClass('open');
//                 });
//                 $('#box-slider .carousel-indicators li').on('click', function() {
//                     $('.indicators-box').removeClass('open');
//                 });
//
//             });
//         });
//         return (
//             <div>
//                 <section id="box-slider" className="col-md-7 center-block" style="float:none;">
//                     <div className="panel panel-default">
//
//                         <div className="panel-heading">
//
//                             <div className="arrow">
//                                 <a className="left carousel-control" href="#slider" role="button" data-slide="next">
//                                     <i className="glyphicon  glyphicon-chevron-left" aria-hidden="true"> </i>
//                                     <span className="sr-only">Previous</span>
//                                 </a>
//                                 <a className="right carousel-control" href="#slider" role="button" data-slide="prev">
//                                     <i className="glyphicon  glyphicon-chevron-right" aria-hidden="true"> </i>
//                                     <span className="sr-only">Next</span>
//                                 </a>
//                             </div>
//                         </div>
//                         <div id="slider" className="carousel slide" data-ride="carousel">
//                             <div className="indicators-box">
//                                 <div id="indicatorsTitle" className="title">
//                                     <i id="btnToggleIndicators" className="glyphicon glyphicon-th-list"> </i>
//                                 </div>
//                                 <ol className="carousel-indicators"> </ol>
//                             </div>
//
//                             <div className="carousel-inner" role="listbox">
//                                 <div className="item">
//                                     <a href="#"><img data-name="Bear"
//                                                      src="https://assets.imgix.net/unsplash/bear.jpg?usm=20&auto=format%2Cenhance&fit=crop&h=300&w=800"
//                                                      alt=""/></a>
//                                 </div>
//                                 <div className="item">
//                                     <a href="#"><img data-name="redleaf"
//                                                      src="https://assets.imgix.net/examples/redleaf.jpg?usm=20&auto=format%2Cenhance&fit=crop&h=300&w=800"
//                                                      alt=""/></a>
//                                 </div>
//                                 <div className="item">
//                                     <a href="#"><img data-name="snake"
//                                                      src="https://assets.imgix.net/examples/snake.jpg?usm=20&auto=format%2Cenhance&fit=crop&h=300&w=800"
//                                                      alt=""/></a>
//                                 </div>
//                                 <div className="item">
//                                     <a href="#"><img data-name="treefrog"
//                                                      src="https://assets.imgix.net/examples/treefrog.jpg?usm=20&auto=format%2Cenhance&fit=crop&h=300&w=800"
//                                                      alt=""/></a>
//                                 </div>
//                                 <div className="item">
//                                     <a href="#"><img data-name="puffins"
//                                                      src="https://assets.imgix.net/examples/puffins.jpg?usm=20&auto=format%2Cenhance&fit=crop&h=300&w=800"
//                                                      alt=""/></a>
//                                 </div>
//                                 <div className="item">
//                                     <a href="#"><img data-name="newt"
//                                                      src="https://assets.imgix.net/examples/newt.jpg?usm=20&auto=format%2Cenhance&fit=crop&h=300&w=800"
//                                                      alt=""/></a>
//                                 </div>
//                                 <div className="item">
//                                     <a href="#"><img data-name="lorie"
//                                                      src="https://assets.imgix.net/examples/lorie.png?usm=20&auto=format%2Cenhance&fit=crop&h=300&w=800"
//                                                      alt=""/></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         );
//     }
// }
//
// export default CarouselProgect;