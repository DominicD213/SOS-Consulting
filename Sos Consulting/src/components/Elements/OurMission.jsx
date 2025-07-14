import React from 'react';
import { NavLink } from 'react-router-dom';
import emailjs from 'emailjs-com';

var img1 = require('./../../images/left-men.png');
var img2 = require('./../../images/background/bg-4.png');
var img3 = require('./../../images/background/bg-site.png');
var img4 = require('./../../images/gallery/portrait/sos_consulting_company_image.png');

class OurMission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      phone: '',
      message: '',
      focusedFields: {}, // track focused or filled fields for animation
    };
  }

  handleFocus = (field) => {
    this.setState((prev) => ({
      focusedFields: { ...prev.focusedFields, [field]: true },
    }));
  };

  handleBlur = (field) => {
    if (this.state[field].trim() === '') {
      this.setState((prev) => ({
        focusedFields: { ...prev.focusedFields, [field]: false },
      }));
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, phone, message } = this.state;

    const templateParams = {
      username,
      email,
      phone,
      message,
    };

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then(
        (response) => {
          alert('Message sent successfully!');
          this.setState({
            username: '',
            email: '',
            phone: '',
            message: '',
            focusedFields: {},
          });
        },
        (err) => {
          alert('Failed to send the message, please try again.');
          console.error(err);
        }
      );
  };

  render() {
    const { username, email, phone, message, focusedFields } = this.state;

    const isFocusedOrFilled = (field) =>
      focusedFields[field] || (this.state[field] && this.state[field].length > 0);

    return (
      <>
        <div
          className="section-full mobile-page-padding mission-outer-section p-t80 p-b30 bg-gray bg-no-repeat bg-right-center"
          style={{ backgroundImage: `url(${img1}), url(${img2})` }}
        >
          <div className="section-content">
            <div className="container">
              {/* TITLE START */}
              <div className="section-head">
                <div className="mt-separator-outer separator-center">
                  <div className="mt-separator">
                    <h2 className="text-uppercase sep-line-one ">
                      <span className="font-weight-300 text-primary">Our</span> Mission
                    </h2>
                  </div>
                </div>
              </div>
              {/* TITLE END */}
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div
                    className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left"
                    style={{ backgroundImage: `url(${img3})` }}
                  >
                    <h3 className="m-t0">Proudly Rooted in Central Texas</h3>
                    <p>
                      SOS Consulting, based in Texas, is a Service-Disabled Veteran-Owned
                      Small Business proudly serving Central Texas and supporting both
                      commercial and government clients.
                    </p>
                    <ul className="list-angle-right anchor-line">
                      <li>
                        <NavLink to={'/services'}>Construction Management</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/services'}>Pre Construction Services</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/services'}>Contract Administration</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/services'}>Implementation</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/services'}>Leed consultation</NavLink>
                      </li>
                    </ul>
                    <div className="text-right">
                      <NavLink to="/about" className="site-button-link" data-hover="Read More">
                        Read More <i className="fa fa-angle-right arrow-animation" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div
                    className="mission-mid bg-no-repeat bg-cover m-b30"
                    style={{ backgroundImage: `url(${img4})` }}
                  />
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="contact-home1-left bg-dark p-a30 m-b0">
                    <h3 className="text-white m-t0">
                      <span className="font-weight-100">Get In</span> Touch
                    </h3>
                    <form className="cons-contact-form2 form-transparent" onSubmit={this.handleSubmit}>
                      {/* Name */}
                      <div className={`input input-animate ${isFocusedOrFilled('username') ? 'focused' : ''}`}>
                        <input
                          type="text"
                          name="username"
                          id="name"
                          required
                          value={username}
                          onFocus={() => this.handleFocus('username')}
                          onBlur={() => this.handleBlur('username')}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="name">Name</label>
                        <span className="spin" />
                      </div>

                      {/* Email */}
                      <div className={`input input-animate ${isFocusedOrFilled('email') ? 'focused' : ''}`}>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={email}
                          onFocus={() => this.handleFocus('email')}
                          onBlur={() => this.handleBlur('email')}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="email">Email</label>
                        <span className="spin" />
                      </div>

                      {/* Phone */}
                      <div className={`input input-animate ${isFocusedOrFilled('phone') ? 'focused' : ''}`}>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          required
                          value={phone}
                          onFocus={() => this.handleFocus('phone')}
                          onBlur={() => this.handleBlur('phone')}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="phone">Phone</label>
                        <span className="spin" />
                      </div>

                      {/* Message */}
                      <div className={`input input-animate ${isFocusedOrFilled('message') ? 'focused' : ''}`}>
                        <textarea
                          name="message"
                          id="message"
                          required
                          value={message}
                          onFocus={() => this.handleFocus('message')}
                          onBlur={() => this.handleBlur('message')}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="message">Leave A Note</label>
                        <span className="spin" />
                      </div>

                      <div className="text-center p-t10">
                        <button type="submit" className="site-button btn-effect">
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
            <strong>Mission</strong>
          </div>
        </div>
      </>
    );
  }
}

export default OurMission;
