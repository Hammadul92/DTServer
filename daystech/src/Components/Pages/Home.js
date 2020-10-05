import React from 'react';
import Auxilary from '../../hoc/Auxilary/Auxilary.js';
import {connect} from 'react-redux';

import Fade from 'react-reveal/Fade';

import './style.css';


class Home extends React.Component {
  componentDidMount() { 
    window.scrollTo(0, 0);
    // if (this.props.location !== prevProps.location) {   
    //     window.scrollTo(0, 0);
    // }
  }

  render(){
    return(
        <Auxilary>
            <div className="banner">
                <div className="container">
                    <div className="banner-inner">
                        <div className="banner-img-home" style={{backgroundImage: "url(/Saas-Management-Platform.png)"}} />                
                        <div className="banner-text-home">
                            <Fade bottom>
                                <h1 className="mb-4">SaaS application management made easy </h1>
                                <button className="btn btn-info btn-lg">LEARN MORE</button>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8 mt-8">
                <Fade left>
                    <div className="container banner-2">             
                        <h1 className="text-center">
                            Complete visibility <br/> total SaaS control
                        </h1>          
                        <p className="text-center">
                            Managing your customers’ SaaS ecosystem will save them money and give you greater visibility and control. <br/> Stop the guesswork, and start putting SaaS usage data to work for you! 
                        </p>
                    </div>

                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-3 col-sm-6">
                                <img src="/Security-policies.svg" width="52" className="mb-4" alt="security policies" />
                                <h4><b>Security policies</b></h4>
                                <p>Easily track usage of unauthorized SaaS applications in order to enforce SaaS security policies.</p>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <img src="/Streamline-operations.svg" width="52" className="mb-4"  alt="streamline operations" />
                                <h4><b>Streamline operations </b></h4>
                                <p>Quickly automate your SaaS provisioning, de-provisioning and approval processes.</p>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <img src="/Spend-optimization.svg" width="52" className="mb-4" alt="spend optimization" />
                                <h4><b>Spend optimization</b></h4>
                                <p>Compare SaaS usage to licensing in order to identify areas of savings.</p>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <img src="/Usage-metrics.svg" width="52" className="mb-4" alt="usage metrics" />
                                <h4><b>Usage metrics </b></h4>
                                <p>Complete SaaS usage reporting across the entire organization.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container banner-2 text-center">
                        <p>Let Augmentt’s SaaS management platform be the engine that powers your <br/> profitable SaaS services.</p>
                        <button className="btn btn-info btn-lg">WHY MANAGE SAAS</button>
                    </div>
                </Fade>
            </div>


            <div className="banner-2 container mt-8 mb-8">
                <div className="row">
                    <div className="col-md-4 pt-8">
                        <Fade left>
                            <h1>Built for MSPs, <br/> designed for SMEs</h1>
                            <p>Augmentt helps you understand SaaS usage, optimize spend, enforce security policies and improve productivity.</p>
                            <button className="btn btn-info btn-lg mb-4"> BENEFITS </button>
                        </Fade>
                    </div>
                    <div className="col-md-8">
                        <Fade right>
                            <img src="/Built-for-MSPs-designed-for-SMEs.png" className="img-fluid" alt="Built for MSPs" />
                        </Fade>
                    </div>
                </div>
            </div>

            <div className="banner-2 container mt-8 mb-8">
                <div className="row">
                    <div className="col-md-8 mb-4">
                        <Fade left>
                            <img src="/SaaS-Application-Discovery.png" className="img-fluid" alt="SaaS Application" />
                        </Fade>
                    </div>
                    <div className="col-md-4 pt-8">
                        <Fade right>
                            <img src="/Augmentt-Discover-Logo.png" className="img-fluid mb-4" alt="Discovery" />
                            <h1>SaaS Application <br/> Discovery</h1>
                            <p>Discover the full SaaS Applications mix used in your client’s environment to help them mitigate risk, improve productivity, and reduce spend.</p>
                            <button className="btn btn-success btn-lg"> VIEW FEATURES </button>
                        </Fade>
                    </div>           
                </div>
            </div>

            <div className="banner-2 container mt-8 mb-8">
                <div className="row">
                    <div className="col-md-4 pt-8">
                        <Fade left>
                            <img src="/Optimize-Logo.png" className="img-fluid mb-4" alt="Optimize" />
                            <h1>SaaS Application <br/> Optimization</h1>
                            <p>Discover the full SaaS Applications mix used in your client’s environment to help them mitigate risk, improve productivity, and reduce spend.</p>
                            <button className="btn btn-warning btn-lg"> VIEW FEATURES </button>
                        </Fade>
                    </div> 
                    <div className="col-md-8">
                        <Fade right>
                            <img src="/Optimize-your-SaaS-subscriptions-949x716-v4.png" className="img-fluid" alt="Optimize your SaaS" />
                        </Fade>
                        
                    </div>          
                </div>
            </div>

            <div className="b-banner">
                <div className="container text-center">
                    <h1 className="text-center">
                        Stay informed
                    </h1>
                    <p>Want to stay informed on Augmentt’s progress? Please sign up for our regular updates.</p>
                    <input type="text" placeholder="Enter your email address"/>
                    <button className="btn btn-primary btn-lg">SUBSCRIBE</button>
                </div>
            </div>
        </Auxilary>
    );
  }

}


const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps, {})(Home);