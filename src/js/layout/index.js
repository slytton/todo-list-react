import React from 'react';

import Header from './header';
import Footer from './footer';
import Nav from './nav';
import {connect} from 'react-redux'
require('./layout.scss')

@connect((store) => {
  return {
    api: store.api
  };
})

export default class Layout extends React.Component {

  render(){
    console.log("in render layout, props: ", this.props);
    if(this.props.api.fetched){
      return (
        <div>
          <Header />
            <Nav />
            {this.props.children}
          <Footer />
        </div>);
    }else{
      return(<div>Loading :)</div>)
    }
  }
}
