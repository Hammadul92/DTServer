import React from 'react';
import {GoogleReCaptcha} from 'react-google-recaptcha-v3';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Auxilary from './../../hoc/Auxilary/Auxilary';
import './Forms.css';
import {loginUser} from './../../store/actions';

class Login extends React.Component{
    state = {
      email: "",
      password: "",   
      user: null,
      captcha: null,
      loading: false
	}

  componentDidMount(){
    this.setState({user: this.props.user}, this.changePage);
  }

  loginDataHandler = (event) =>{
    event.preventDefault();
    this.setState({loading: true}, ()=>{
      this.props.loginUser(this.state.email, this.state.password).then(
        this.changeState 
      );
    })
 
  }

  changeState = () => {
     this.setState({user: this.props.user, loading: false}, this.changePage );
  }


  changePage = () => {
    if(this.state.user && !this.state.user.error){
      this.props.history.push('/');
    }
  }

  renderButton(){
    if(this.state.loading){
      return <button type="submit" className="btn btn-info float-right" disabled> Sign in <i className="fa fa-spinner fa-spin"></i> </button>;
    }
    return <button type="submit" className="btn btn-info float-right" > Sign in </button>;
  }

  ReCaptcha(token){
      this.setState({captcha: true})
  }

	render(){
      // console.log(this.state.user)
      return(
        <Auxilary>
                <div className="container mb-8 mt-8 auth-form">
                    <div className="row">
                      <div className="col-md-4 offset-md-4">
                        <h2 className="mb-4 text-center"><b>Welcome! </b></h2>
                        { (this.state.user) ?
                          (this.state.user.error)?
                            <div className="alert alert-danger text-center" role="alert">
                                {this.state.user.error}
                            </div>
                            :
                            null
                          :null
                        }
                        <form onSubmit={(event) => this.loginDataHandler(event)}>

                          <div className="form-group">
                            
                            <input
                              type='email'
                              className={(this.state.email!=='')?"form-control filled": "form-control"}
                              disabled={(this.state.captcha) ? false : true} 
                              value={this.state.email}
                              onChange={(event)=>this.setState({email: event.target.value})}
                              required
                            />
                            <label>Email</label>                            
                          </div>

                          <div className="form-group">
                            
                            <input
                                type='password'
                                disabled={(this.state.captcha) ? false : true} 
                                className={(this.state.password!=='')?"form-control filled": "form-control"} 
                                value={this.state.password}
                                onChange={(event)=>this.setState({password: event.target.value})}
                                required
                            />
                            <label>Password</label>
                          </div>

                          <div className="form-group forgot clearfix">
                              <GoogleReCaptcha onVerify={token => this.ReCaptcha(token)} />
                              {this.renderButton()}
                              <Link to="/signup" className="btn btn-light float-right mr-2"> Sign up </Link>
                              <span className="text-sm text-secondary cursor-pointer"> Forgot password </span>
                          </div>

                         
                          {/* <div className="form-group text-center">
                            <a href="/auth/google">
                              <button type="button" className="google-button">
                                <span className="google-button__icon">
                                  <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg"><path d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" id="Shape" fill="#EA4335"/><path d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z" id="Shape" fill="#FBBC05"/><path d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z" id="Shape" fill="#4285F4"/><path d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z" fill="#34A853"/></svg>
                                </span>
                                <span className="google-button__text">Sign in with Google</span>
                              </button>
                            </a>
                          </div> */}
                                    
                        </form>
                      </div>                  
                    </div>
                </div>
        </Auxilary>
			);
	}
}


const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps, {loginUser})(Login);
