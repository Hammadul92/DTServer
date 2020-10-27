import React from 'react';
import {connect} from 'react-redux';
import {logoutUser} from './../../store/actions';

import {Link, NavLink} from 'react-router-dom';
import "./NavBar.css";

import  Auxilary from './../../hoc/Auxilary/Auxilary';


class Navbar extends React.Component {

  state = {
    navCollapsed: true,
    user: null,
  }

  componentDidMount(){
    this.setState({user: this.props.user})
  }

  componentDidUpdate(prevProps){
    if(this.props.user !== this.state.user ){
      if(this.props.user){
        if(!this.props.user.error){
          this.setState({user: this.props.user});
        }
      }
    }
  }

  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed })
  }

  logout = () => {
    this.props.logoutUser();
  }


  render(){
    console.log(this.props.user)
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
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="main" activeclassname="active">Products</NavLink>   
              </li>
              <li className="nav-item">
                <NavLink to="/pricing" className="main" activeClassName="active">Pricing</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink to="/about-us" className="main" activeClassName="active">About</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {(!this.state.user)?
                <Auxilary>
                  <li className="nav-item">
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signin">Sign in</Link>
                  </li>
                </Auxilary>
                :
                <li className="nav-item">
                  <NavLink to="/account" className="main" activeClassName="active"> Welcome, {this.state.user.email} </NavLink>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/account">Account</Link>
                    <Link className="dropdown-item" to="/billing"> Billing </Link>
                    <Link className="dropdown-item" to="#" onClick={this.logout}> Logout </Link>
                  </div>
                </li>
              }
              
              <li className="nav-item">
                  <i className="fab fa-linkedin-in"></i>
              </li>
              <li className="nav-item">
                <i className="fab fa-facebook-f"></i>
              </li>
              <li className="nav-item">
                <i className="fab fa-instagram"></i>
              </li>
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

export default connect(mapStateToProps, {logoutUser})(Navbar);

