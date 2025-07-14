import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Testimonials data
const testimonials = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        reviewername: 'Shelly Johnson',
        position: 'Business Person',
        review: 'Excellent Customer support!. The template itself is very extended...'
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        reviewername: 'Cuthbert Brain',
        position: 'Contractor',
        review: 'Excellent customer support! simply dummy text of the printing and industry...'
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        reviewername: 'Cathrine Wagner',
        position: 'Builder',
        review: 'Excellent customer support! simply dummy text of the printing and industry...'
    },
    {
        image: require('./../../images/testimonials/pic4.jpg'),
        reviewername: 'John Doe',
        position: 'Business Person',
        review: 'Excellent Customer support! The template itself is very extended...'
    },
    {
        image: require('./../../images/testimonials/pic5.jpg'),
        reviewername: 'Cuthbert Brain',
        position: 'Business Person',
        review: 'Excellent customer support! simply dummy text of the printing and industry...'
    }
];

const bnr1 = require('./../../images/background/bg6.jpg');

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div
            className="section-full mobile-page-padding p-t80 p-b50 square_shape2 bg-cover"
            style={{ backgroundImage: `url(${bnr1})` }}
        >
            <div className="container">
                <div className="section-content">
                    {/* TITLE */}
                    <div className="section-head">
                        <div className="mt-separator-outer separator-center">
                            <div className="mt-separator">
                                <h2 className="text-uppercase sep-line-one">
                                    <span className="font-weight-300 text-primary">Client</span> Testimonials
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* TESTIMONIALS */}
                    <Slider {...settings}>
                        {testimonials.map((item, index) => (
                            <div key={index} className="item">
                                <div className="testimonial-2 m-a30 hover-animation-1">
                                    <div className="block-shadow bg-white p-a30">
                                        <div className="testimonial-detail clearfix">
                                            <div className="testimonial-pic radius shadow scale-in-center">
                                                <img src={item.image} width={100} height={100} alt="" />
                                            </div>
                                            <h4 className="testimonial-name m-b5">{item.reviewername} -</h4>
                                            <span className="testimonial-position">{item.position}</span>
                                        </div>
                                        <div className="testimonial-text">
                                            <span className="fa fa-quote-right" />
                                            <p>{item.review}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                <strong>Clients</strong>
            </div>
        </div>
    );
};

export default Testimonials;
