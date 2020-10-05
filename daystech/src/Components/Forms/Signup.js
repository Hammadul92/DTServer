import React from 'react';
import {connect} from 'react-redux';



class Signup extends React.Component {


  render(){
    return(
     <h1>Signin</h1>
    );
  }

}


const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps, {})(Signup);