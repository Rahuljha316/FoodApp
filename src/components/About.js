// import { Outlet } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import Profile from './ProfileClass';

import { Component } from 'react';
class About extends Component {
  constructor(props){
    super(props);

    



    console.log('parent constructor');
  }
async componentDidMount(){
  // best place to make an api call

  console.log('parent componentdid mount');
}

  render(){
  console.log(' parent render');
    return(
      <div>
        <h1>About us Page</h1>
      <p>this is some random page i dont want to or write about it</p>
      <Profile name={'child first'} xyz={'abc'}/>
      <Profile name={'child second'} xyz={'abc'}/>

      </div>
    )
  }

}

export default About;
