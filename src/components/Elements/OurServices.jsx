import React from 'react';

const services = [
    {
        count: 1,
        title: 'Building Construction',
        icon: require('./../../images/icon/crane-1.png'),
        description: 'We deliver top-quality construction services from the ground up, ensuring structural integrity, durability, and timely completion.'
    },
    {
        count: 2,
        title: 'Building Renovation',
        icon: require('./../../images/icon/renovation.png'),
        description: 'Transform your existing space with expert renovation services that enhance functionality, style, and value.'
    },
    {
        count: 3,
        title: 'Building Maintenance',
        icon: require('./../../images/icon/toolbox.png'),
        description: 'Keep your property in peak condition with our reliable and efficient maintenance solutions, tailored to your needs.'
    },
    {
        count: 4,
        title: 'Architecture Design',
        icon: require('./../../images/icon/compass.png'),
        description: 'Bring your vision to life with innovative architectural design that blends creativity, functionality, and sustainability.'
    }
]


class OurServices extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
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
                <div className="section-full mobile-page-padding  p-b50  square_shape2">
                    <div className="section-content">
                        <div className="Service-half-top p-t80  bg-dark bg-moving" >
                            <div className="container">
                                {/* TITLE START */}
                                <div className="section-head text-white">
                                    <div className="mt-separator-outer separator-left">
                                        <div className="mt-separator">
                                            <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Services</h2>
                                        </div>
                                    </div>
                                    <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</h3>
                                </div>
                                {/* TITLE END */}
                            </div>
                        </div>
                        <div className="services-half-bottom">
                            <div className="container">
                                <div className="row">
                                    {services.map((item, index) => (
                                        <div className="col-md-3 col-sm-6" key={index}>
                                            <div className="mt-icon-box-wraper m-b30">
                                                <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                                    <span className="icon-count-number">{item.count}</span>
                                                    <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                        <span className="icon-cell"><img src={item.icon} alt=""/></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="mt-tilte m-b25">{item.title}</h4>
                                                        <p style={{height:"15rem"}}>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                        <strong>Services</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default OurServices;