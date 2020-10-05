import React from 'react';
import {connect} from 'react-redux';


import Fade from 'react-reveal/Fade';
import Auxilary from '../../hoc/Auxilary/Auxilary.js';

class Pricing extends React.Component {
    componentDidMount() { 
        window.scrollTo(0, 0);
    }


    render(){
        return(
            <Auxilary>
                <div className="banner">
                    <div className="banner-inner">
                        <div className="banner-img-pricing" style={{backgroundImage: "url(/PricingPage2.png)"}} />                
                        <div className="banner-text-pricing text-center">
                            <Fade left>
                                <h1 className="mb-4">Augmentt Pricing</h1>
                                <p>Get in touch to see if you’re eligible for our Freemium</p>
                                <button className="btn btn-info btn-lg">GET IN TOUCH</button>
                            </Fade>
                        </div>
                    </div>
                </div>

                <div className="mb-8 mt-8">
                    <Fade left>
                        <div className="container banner-2">             
                            <h1 className="text-center">
                                Pricing
                            </h1>          
                            <p className="text-center">
                                Easy Self-Service Billing
                            </p>
                        </div>
                    </Fade>
                </div>

                <div className="container">
                    <div className="banner-2 text-center mt-4 mb-4">
                        <h4>Web Application Development</h4>
                    </div>

                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <table className="table table-bordered table-striped text-center">
                                <thead className="pricing-table">
                                    <tr>
                                        <th> <span className="text-main">Per Company</span> month to month</th>
                                        <th> <span className="text-main">ESSENTIAL</span> 1 log file upload per month </th>
                                        <th> <span className="text-main">PREMIUM</span> Daily log file upload</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-middle">Upfront 1st</td>
                                        <td className="align-middle">$49</td>
                                        <td className="align-middle">$99</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle"> <i className="text-main">SAVE WITH ANNUAL</i></td>
                                        <td className="align-middle">$490</td>
                                        <td className="align-middle">$990</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">2-15</td>
                                        <td className="align-middle">$45</td>
                                        <td className="align-middle">$89</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">16-30</td>
                                        <td className="align-middle">$40</td>
                                        <td className="align-middle">$79</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">31-45</td>
                                        <td className="align-middle">$35</td>
                                        <td className="align-middle">$69</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">46+</td>
                                        <td className="align-middle">$30</td>
                                        <td className="align-middle">$59</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="text-center mb-3 mt-3"><b><i> Days Tech Web Application Development is licensed on a per-customer basis.</i></b></p>
                    <p className="text-center"><i> You can purchase additional yearly licenses. This is handled by your Customer Success Rep. </i></p>
                </div>  

                

                <div className="container mt-8 mb-8">
                    <div className="banner-2 text-center mt-4 mb-4">
                        <h4> Mobile Application Development</h4>
                    </div>

                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <table className="table table-bordered table-striped text-center">
                                <thead className="pricing-table">
                                    <tr>
                                        <th> <span className="text-main">Per Company</span> month to month</th>
                                        <th> <span className="text-main">ESSENTIAL</span> 1 log file upload per month </th>
                                        <th> <span className="text-main">PREMIUM</span> Daily log file upload</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-middle">Upfront 1st</td>
                                        <td className="align-middle">$49</td>
                                        <td className="align-middle">$99</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle"> <i className="text-main">SAVE WITH ANNUAL</i></td>
                                        <td className="align-middle">$490</td>
                                        <td className="align-middle">$990</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">2-15</td>
                                        <td className="align-middle">$45</td>
                                        <td className="align-middle">$89</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">16-30</td>
                                        <td className="align-middle">$40</td>
                                        <td className="align-middle">$79</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">31-45</td>
                                        <td className="align-middle">$35</td>
                                        <td className="align-middle">$69</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">46+</td>
                                        <td className="align-middle">$30</td>
                                        <td className="align-middle">$59</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="text-center mb-3 mt-3"><b><i> Days Tech Web Application Development is licensed on a per-customer basis.</i></b></p>
                    <p className="text-center"><i> You can purchase additional yearly licenses. This is handled by your Customer Success Rep. </i></p>
                </div>  


                <div className="container">
                    <div className="banner-2 text-center mt-4 mb-4">
                        <h4> SEO Optimization </h4>
                    </div>

                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <table className="table table-bordered table-striped text-center">
                                <thead className="pricing-table">
                                    <tr>
                                        <th> <span className="text-main">Per Company</span> month to month</th>
                                        <th> <span className="text-main">ESSENTIAL</span> 1 log file upload per month </th>
                                        <th> <span className="text-main">PREMIUM</span> Daily log file upload</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-middle">Upfront 1st</td>
                                        <td className="align-middle">$49</td>
                                        <td className="align-middle">$99</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle"> <i className="text-main">SAVE WITH ANNUAL</i></td>
                                        <td className="align-middle">$490</td>
                                        <td className="align-middle">$990</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">2-15</td>
                                        <td className="align-middle">$45</td>
                                        <td className="align-middle">$89</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">16-30</td>
                                        <td className="align-middle">$40</td>
                                        <td className="align-middle">$79</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">31-45</td>
                                        <td className="align-middle">$35</td>
                                        <td className="align-middle">$69</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">46+</td>
                                        <td className="align-middle">$30</td>
                                        <td className="align-middle">$59</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="text-center mb-3 mt-3"><b><i> Days Tech Web Application Development is licensed on a per-customer basis.</i></b></p>
                    <p className="text-center"><i> You can purchase additional yearly licenses. This is handled by your Customer Success Rep. </i></p>
                </div>


                <div className="mt-8 mb-8 container">
                    <Fade left>
                        <div className="banner-2 text-center">
                            <h1>Have questions? Get in touch</h1>
                        </div>
                        <div className="row mt-4 text-center">
                            <div className="col-md-6 offset-md-3">
                                <div className="row">
                                    <div className="col-6">
                                        <i className="fas fa-envelope text-bg text-main"></i>
                                        <div className="mt-4 mb-2 text-md">
                                            <b> Email Us </b>
                                        </div>
                                        <span className="text-md">sales@augmentt.com</span>
                                    </div>
                                    <div className="col-6">
                                        <i className="fas fa-phone text-bg text-main"></i>
                                        <div className="mt-4 mb-2 text-md">
                                            <b> Call Us </b>
                                        </div>
                                        <span className="text-md">888-670-8444</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>


                <div className="container">
                    <Fade right>
                        <div className="row">
                            <form className="col-md-6 offset-md-3 form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="firstname"> First Name <span className="text-danger">*</span></label>
                                        <input type="text" id="firstname" className="form-control" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="lastname"> Last Name <span className="text-danger">*</span></label>
                                        <input type="text" id="lastname" className="form-control" required />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="email"> Business Email <span className="text-danger">*</span></label>
                                        <input type="email" id="email" className="form-control" required />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="phone"> Phone <span className="text-danger">*</span></label>
                                        <input type="text" id="phone" className="form-control" required />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="companyname"> Company Name <span className="text-danger">*</span></label>
                                        <input type="text" id="companyname" className="form-control" required />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="message"> Your Message <span className="text-danger">*</span></label>
                                        <textarea id="message" className="form-control" required ></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Fade>
                </div>

                




            </Auxilary>
        );
    }

}


const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps, {})(Pricing);