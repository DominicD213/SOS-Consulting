import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = { logo: require('./../../images/logo-1.png') };
    }

    updateFooterLogo = (updatedlogo) => {
        this.currentstate.logo = updatedlogo;
    }

    render() {
        return (
            <>
                <footer className="site-footer footer-large footer-dark footer-wide" style={{ width: "100%" }}>
                    {/* Call to Action Section */}
                    {/* Footer Blocks */}
                    <div className="footer-top overlay-wraper" style={{paddingTop: "5rem"}}>
                        <div className="overlay-main" />
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-between flex-wrap">
                                {/* About Company */}
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="widget widget_about">
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}>
                                                <img src={this.currentstate.logo} alt="SOS Consulting Logo" />
                                            </NavLink>
                                        </div>
                                        <p className="max-w400">Today we can tell you, thanks to your passion, hard work, creativity, and expertise, you delivered us the most beautiful house with great looks.</p>
                                        <ul className="social-icons mt-social-links">
                                            <li><NavLink to={"#"} className="fa fa-google" /></li>
                                            <li><NavLink to={"#"} className="fa fa-rss" /></li>
                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                            <li><NavLink to={"#"} className="fa fa-twitter" /></li>
                                            <li><NavLink to={"#"} className="fa fa-linkedin" /></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">Contact Us</h4>
                                        <ul className="widget_address">
                                            <li>11307 Brownsboro Ct, Manor, TX 78653</li>
                                            <li>admin@mysosconsulting.com</li>
                                            <li>(254) 833-1605</li>
                                            <li>(254) 563-5971</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="mt-footer-bot-center text-center">
                                    <span className="copyrights-text">
                                        © 2025 SOS Consulting
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)} />
            </>
        );
    }
}

export default Footer;
