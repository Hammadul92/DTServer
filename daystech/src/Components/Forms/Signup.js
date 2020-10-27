import React from 'react';
import {GoogleReCaptcha} from 'react-google-recaptcha-v3';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Auxilary from './../../hoc/Auxilary/Auxilary';
import './Forms.css';
import {registerUser} from './../../store/actions';

class Login extends React.Component{
    state = {
      firstName: '',
      lastName: '',
      companyName: '',
      email: "",
      password: "",
      user: null,
      captcha: null,
      loading: false
	}

  componentDidMount(){
    this.setState({user: this.props.user}, this.changePage);
  }

  registerDataHandler = (event) =>{
    event.preventDefault();
    this.setState({loading: true}, ()=>{
      let formData = {email: this.state.email, 
                      password: this.state.password, 
                      firstName: this.state.firstName, 
                      lastName: this.state.lastName, 
                      companyName: this.state.companyName
                     };
      this.props.registerUser(formData).then(
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
      return <button type="submit" className="btn btn-info btn-lg" disabled> Register <i className="fa fa-spinner fa-spin"></i> </button>;
    }
    return <button type="submit" className="btn btn-info btn-lg" > Register </button>;
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
                        <h2 className="mb-4 text-center"><b> Getting started </b></h2>
                        { (this.state.user) ?
                          (this.state.user.error)?
                            <div className="alert alert-danger text-center" role="alert">
                                {this.state.user.error}
                            </div>
                            :
                            null
                          :null
                        }
                        <form onSubmit={(event) => this.registerDataHandler(event)}>

                          <div className="form-group">                              
                              <input
                                type='text'
                                className={(this.state.firstName!=='')?"form-control filled": "form-control"}
                                disabled={(this.state.captcha) ? false : true} 
                                value={this.state.firstName}
                                onChange={(event)=>this.setState({firstName: event.target.value})}
                                required
                              />
                              <label>Enter first name</label>                            
                          </div>

                          <div className="form-group">                              
                              <input
                                type='text'
                                className={(this.state.lastName!=='')?"form-control filled": "form-control"}
                                disabled={(this.state.captcha) ? false : true} 
                                value={this.state.lastName}
                                onChange={(event)=>this.setState({lastName: event.target.value})}
                                required
                              />
                              <label>Enter last name</label>                            
                          </div>

                          <div className="form-group">                              
                              <input
                                type='text'
                                className={(this.state.companyName!=='')?"form-control filled": "form-control"}
                                disabled={(this.state.captcha) ? false : true} 
                                value={this.state.companyName}
                                onChange={(event)=>this.setState({companyName: event.target.value})}
                                required
                              />
                              <label>Enter company name</label>                            
                          </div>

                          <div className="form-group">          
                            <input
                              type='email'
                              className={(this.state.email!=='')?"form-control filled": "form-control"}
                              disabled={(this.state.captcha) ? false : true} 
                              value={this.state.email}
                              onChange={(event)=>this.setState({email: event.target.value})}
                              required
                            />
                            <label>Enter email address</label>                            
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
                            <label>Enter password</label>
                          </div>

                          <div className="form-group text-center">
                              <GoogleReCaptcha onVerify={token => this.ReCaptcha(token)} />
                              {this.renderButton()}       
                          </div>
                                    
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

export default connect(mapStateToProps, {registerUser})(Login);
