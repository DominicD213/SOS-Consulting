import React from 'react';

class Specialization extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding bg-white p-t80 p-b30 bg-repeat square_shape1" >
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/pic1.jpg')} alt=""/>
                                        <div className="figcaption">
                                            <h4>Construction</h4>
                                            <p>Engineering your dreams with us.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/pic2.jpg')} alt="" />
                                        <div className="figcaption">
                                            <h4>Architecture</h4>
                                            <p>Life is Architecture.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/pic3.jpg')} alt="" />
                                        <div className="figcaption bg-dark">
                                            <h4>Renovation</h4>
                                            <p>Dazzling Design</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-6 m-b30 ">
                                    <div className="mt-box our-speciallization-content" style={{height:"40rem"}}>
                                        <h3 className="m-t0"><span className="font-weight-100">Building</span> <br />It better in concrete.</h3>
                                        <p>When it comes to your house, don’t mess with the rest, trust the best. Making your vision come true, that is what we do.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
                        <strong>Welcome</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Specialization;