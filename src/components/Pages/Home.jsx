import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Slider from '../Elements/Slider';
import Specialization from '../Elements/Specialization';
import About from '../Elements/About';
import OurValue from '../Elements/OurValue';
import Testimonials2 from '../Elements/Testimonials2';
import Team from '../Elements/Team3';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider />
                    <Specialization />
                    <About />
                    <Team/>
                    <Testimonials2/>
                    <OurValue />
                </div>
                <Footer />
            </>
        );
    };
};

export default Home;