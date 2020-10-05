import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';



class Footer extends React.Component {


  render(){
    return(
      <div className="footer text-center">
          <div className="container">
              <div className="row">
                  <div className="col-md-3 mb-3">
                      <h5>Company</h5>
                      <ul>
                          <li><Link to="/about-us">About us</Link></li>
                          <li><Link to="/pricing">Contact us</Link></li>
                    </ul>
                  </div>
                  <div className="col-md-3 mb-3">
                      <h5>Solutions</h5>
                      <ul>
                          <li><Link to="seo-optimization">SEO Optimization</Link></li>
                          <li><Link to="/ecommerce">ECommerce</Link></li>
                          <li><Link to="/web-application">Web Application</Link></li>
                          <li><Link to="/web-application">Mobile Application</Link></li>
                          <li><Link to="/apis">APIs</Link></li>
                      </ul>
                  </div>
                  <div className="col-md-3 mb-3">
                     <h5>Subscribe</h5>
                     <ul>
                         <li>Want to stay informed on Augmentt’s progress? Please sign up for our regular updates. We won’t spam you, we promise!</li>
                     </ul>
                     <div className="mt-2">
                         <input type="text" />
                         <button className="btn btn-primary"> SUBSCRIBE </button>
                     </div>
                  </div>
                  <div className="col-md-3 mb-3">
                  <h5>Contact:</h5>
                     <ul>
                         <li>
                            888-670-8444 <br/>
                            555 Legget Drive <br/>
                            Tower A, Suite 304 <br/>
                            Kanata, Ontario <br/>
                            K2K 2X3 <br/>
                            (fax) 647-372-0393
                         </li>
                     </ul>
                  </div>
              </div>
              <hr />
              <p className="text-center">Copyright 2020. <b>Days Tech Inc.</b>  All rights reserved.</p>
          </div>
      </div>
    );
  }

}


export default Footer;