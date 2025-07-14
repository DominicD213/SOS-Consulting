import React from 'react';

const services = [
    {
        title: 'Rooms & Halls',
        flaticon: 'flaticon-city',
        description: 'We design and construct modern rooms and spacious halls tailored to your specific needs, whether for residential, commercial, or institutional purposes. Each project balances aesthetics, comfort, and structural integrity.',
    },
    {
        title: 'Renovation',
        flaticon: 'flaticon-paint',
        description: 'Our renovation services breathe new life into your existing spaces. From minor upgrades to full-scale remodeling, we focus on functionality, energy efficiency, and modern appeal.',
    },
    {
        title: 'Construction',
        flaticon: 'flaticon-crane',
        description: 'We provide comprehensive construction solutions, including foundation work, structural framing, and finishing. Our team ensures projects are completed on time, within budget, and to the highest standards.',
    },
    {
        title: 'Interior',
        flaticon: 'flaticon-decorating',
        description: 'Enhance your environment with our custom interior design services. We specialize in creating spaces that reflect your personality and purpose, with quality materials and creative layouts.',
    },
    {
        title: 'Professional Opinion',
        flaticon: 'flaticon-chart',
        description: 'Gain valuable insights with expert consultations. We assess construction plans, building conditions, and project viability to help you make informed decisions backed by professional knowledge.',
    },
    {
        title: 'Accurate Engineering',
        flaticon: 'flaticon-sketch',
        description: 'Precision and safety are at the core of our engineering services. From structural analysis to load-bearing calculations, we ensure that every element of your project meets strict technical standards.',
    },
    {
        title: 'General Builder',
        flaticon: 'flaticon-builder',
        description: 'Our general building services cover everything from groundwork to roofing. With skilled professionals and proven techniques, we handle every aspect of your construction efficiently and reliably.',
    },
    {
        title: 'Electricity',
        flaticon: 'flaticon-drill',
        description: 'We deliver safe and efficient electrical installations, upgrades, and maintenance. Whether residential or commercial, our services ensure your property is powered reliably and up to code.',
    },
    {
        title: 'Refurbishment',
        flaticon: 'flaticon-art-and-design',
        description: 'Transform old or damaged spaces with our comprehensive refurbishment services. We update interiors, restore finishes, and ensure your spaces meet modern design and safety standards.',
    }
];

class OurServices3 extends React.Component {
    componentDidMount() {
        function loadScript(src) {
            return new Promise(function(resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function() {
                    resolve();
                });
                script.addEventListener('error', function(e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            });
        }

        loadScript('./assets/js/masonary.js');
    }

    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white mobile-page-padding">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one">
                                        <span className="font-weight-300 text-primary">All</span> Services
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}

                        {/* SERVICES GRID START */}
                        <div className="section-content">
                            <div className="row">
                                {services.map((item, index) => (
                                    <div key={index} className="col-md-4 col-sm-6">
                                        <div className="mt-icon-box-wraper p-a30 center m-b30 box-shadow bg-white" style={{ height: "350px" }}>
                                            <div className="mt-icon-box-sm inline-icon text-primary m-b20 radius bg-primary">
                                                <span className="icon-cell text-secondry">
                                                    <i className={item.flaticon} />
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* SERVICES GRID END */}
                    </div>
                </div>
            </>
        );
    }
}

export default OurServices3;
