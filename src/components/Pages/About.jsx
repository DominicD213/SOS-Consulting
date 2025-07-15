import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About4 from './../Elements/About4';
import Specialization4 from './../Elements/Specialization4';
import Team3 from './../Elements/Team3';
import AboutSummary from './../Elements/AboutSummary';

var bnrimg = require('./../../images/banner/1.jpg');

class About extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="Creating quality urban lifestyles, building stronger communities." pagename="About Us" bgimage={bnrimg}/>
                    <About4 />
                    <Specialization4 />
                    <Team3 />
                    <AboutSummary />

                </div>

                <Footer />

            </>
        );
    };
};

export default About;