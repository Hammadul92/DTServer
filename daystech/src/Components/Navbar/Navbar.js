import React from 'react';
import {connect} from 'react-redux';

import {Link, NavLink} from 'react-router-dom';
import "./NavBar.css";


class Navbar extends React.Component {

  state = {
    navCollapsed: true,
    username: null,
  }

  componentDidMount(){
    this.setState({username: this.props.user.username})
  }

  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed })
  }


  render(){
    const {navCollapsed} = this.state  
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="/logo.png1" alt="Logo" width="180" />
          </Link>
          <button
              onClick={this._onToggleNav}
              className="navbar-toggler" 
              type="button" 
              data-toggle="collapse" 
              aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
            <ul className="mr-auto navbar-nav">
              <li className="nav-item">
                <NavLink to="/services" className="main" activeClassName="active">Services</NavLink>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/about-us/our-team">Web Application Development</Link>
                  <Link className="dropdown-item" to="/about-us/our-team">Mobile Application Development</Link>
                  <Link className="dropdown-item" to="/about-us/contact">SEO Optimization</Link>
                </div>      
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="main" activeclassname="active">Products</NavLink>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/about-us/our-team">Product A</Link>
                  <Link className="dropdown-item" to="/about-us/our-team">Product B</Link>
                  <Link className="dropdown-item" to="/about-us/contact">Product C</Link>
                </div>   
              </li>
              <li className="nav-item">
                <NavLink to="/pricing" className="main" activeClassName="active">Pricing</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink to="/about-us" className="main" activeClassName="active">About</NavLink>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/about-us/our-team">About</Link>
                  <Link className="dropdown-item" to="/about-us/our-team">Our Team</Link>
                  <Link className="dropdown-item" to="/about-us/contact">Contact</Link>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/signup">Sign up</Link>
              </li>
              <li className="nav-item">
                <Link to="/signin">Sign in</Link>
              </li>
              <li className="nav-item">
                  <i className="fab fa-linkedin-in"></i>
              </li>
              <li className="nav-item">
                <i className="fab fa-facebook-f"></i>
              </li>
              <li className="nav-item">
                <i className="fab fa-instagram"></i>
              </li>
              {/* <li className="nav-item">
                <Link to="/account"><img src="/user-avatar.png" alt="User avatar" width="22"/> Welcome, {this.state.username} </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}


const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps, {})(Navbar);

