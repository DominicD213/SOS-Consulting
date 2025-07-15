import React from 'react';
import { NavLink } from 'react-router-dom';

const teamMembers = [
    {
        image: require('../../images/gallery/portrait/Daryl_single.jpg'),
        membername: 'Daryl Rodriguez',
        position: 'Founder & Chief Executive Officer, SOS Consulting',
        description:"Daryl Rodriguez is the Founder and CEO of SOS Consulting, leveraging over a decade of U.S. Marine Corps leadership and two years in the roofing industry to drive strategy, operations, and execution. Currently pursuing his MBA in Operational Management, Daryl leads with discipline, community-focused values, and a mission-driven approach to solving real-world problems."
    },
    {
        image: require('../../images/gallery/portrait/Foster_single.jpg'),
        membername: 'Timothy Alex Foster',
        position: 'Co-Owner & Chief Financial Officer,',
        description:"Timothy Alex Foster is the Co-Owner and CFO of SOS Consulting, bringing over five years of experience in construction project management, insurance negotiation, and sales leadership. With a background in Finance and Economics, he has generated over $3 million in roofing restoration sales and is known for building high-performing teams that deliver results with integrity and precision."
    },
]

class Team3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white inner-page-padding">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Founders</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE Team START */}
                        <div className="section-content">
                            <div className="row">
                                {teamMembers.map((item, index) => (
                                    <div key={index} className="col-md-6 col-sm-6 col-xs-6 col-xs-100pc m-b30   ">
                                        <div className="our-team-1 hover-animation-1">
                                            <div className="profile-image scale-in-center"><img src={item.image} alt="" /></div>
                                            <div className="figcaption">
                                                <h4>{item.membername}</h4>
                                                <h5>{item.position}</h5>
                                                <p>{item.description}</p>
                                                <div className="icons">
                                                    <NavLink to={"#"} > <i className="fa fa-twitter" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-instagram" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-linkedin" /></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Team3;