import React from 'react';
import CountUp from 'react-countup';
import ReactPlayer from 'react-player';


class OurValue extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };

    render() {
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Value</h2>
                                            </div>
                                            <p>At SOS Consulting, our values are built on a foundation of service, integrity, and results. As a veteran-owned business, we bring military precision, discipline, and accountability to every project. We value trust, transparency, and long-term relationships—because we don’t just build structures, we build community. From disaster recovery to full-scale construction, our hands-on leadership ensures every solution is tailored, mission-focused, and delivered with excellence. Every job is more than a contract—it's a commitment to those we serve.</p>
                                        </div>
                                    </div>
                                   {/* TITLE END */}
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                        <div className="counter font-30 font-weight-800 m-b15 text-primary"><CountUp end={45} duration={5} /></div>
                                        <h4 className="m-tb0">Active Experts</h4>
                                    </div>
                                    <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                        <div className="counter font-30 font-weight-800 m-b15  text-primary"><CountUp end={183} duration={5} /></div>
                                        <h4 className="m-tb0">Satisfied Clients</h4>
                                    </div>
                                    <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                        <div className="counter font-30 font-weight-800 m-b15 text-primary"><CountUp end={200} duration={5} /></div>
                                        <h4 className="m-tb0">Project Complete</h4>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-6">
                                    <div className="p-b0">
                                        <div className="mt-box">
                                            <h3 className="m-t0"><span className="font-weight-100"> We have</span><span className="text-primary"> 10 years</span> experience in construction</h3>
                                        </div>
                                        <span className="progressText text-black"><b>Architecher</b></span>
                                        <div className="progress mt-probar-1  m-b30 m-t10">
                                            <div className="progress-bar bg-primary " role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="85%" />
                                            </div>
                                        </div>
                                        <span className="progressText text-black"><b>Construction</b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={78} aria-valuemin={10} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="78%" />
                                            </div>
                                        </div>
                                        <span className="progressText text-black"><b>Building</b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="65%" />
                                            </div>
                                        </div>
                                        <span className="progressText text-black"><b>Interior</b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="40%" />
                                            </div>
                                        </div>
                                        <span className="progressText text-black"><b>Commercial</b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="55%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="myModal2" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://vimeo.com/34741214' />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurValue; 