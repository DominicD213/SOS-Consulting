import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Banner from '../Elements/Banner';
import OurServices3 from '../Elements/OurServices3';
import OurValue3 from '../Elements/OurValue3';
import Faq from '../Elements/Faq';

var bnrimg = require('./../../images/banner/1.jpg');

class Services extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="Diversified services. Unvarying quality." pagename="Services" bgimage={bnrimg}/>
                    <OurServices3 />
                    <OurValue3 />
                    <Faq />
                <Footer />
                    
                </div>

                
               

            </>
        );
    };
};

export default Services;