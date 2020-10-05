import React from 'react';
import './App.css';

import {connect} from 'react-redux';
import {fetchUser} from './../store/actions';

import {Route,Switch} from 'react-router-dom';
import Auxilary from '../hoc/Auxilary/Auxilary.js'
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';
import Signin from './Forms/Signin.js';
import Signup from './Forms/Signup.js';
import Services from './Pages/Services.js';
import Pricing from './Pages/Pricing.js';
import Home from './Pages/Home.js';



class App extends React.Component{

  componentDidMount(){
    this.props.fetchUser()
  }
  
  render(){
    return(
      <Auxilary>
        <Navbar />
        <Switch>
              <Route path='/' exact render={(props) => <Home {...props} />} />
              <Route path='/signin' exact component={Signin}/>
              <Route path='/signup' exact component={Signup}/>
              <Route path='/services' exact component={Services}/>
              <Route path='/pricing' exact component={Pricing}/>
        </Switch>
        <Footer />
      </Auxilary>
    );
  }
  
};



const mapStateToProps = state => {
	return{
    user: state.user
	}
};

export default connect(mapStateToProps, {fetchUser})(App);