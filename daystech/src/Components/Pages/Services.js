import React from 'react';
import {connect} from 'react-redux';



class Services extends React.Component {


  render(){
    return(
     <h1>Services</h1>
    );
  }

}


const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps, {})(Services);