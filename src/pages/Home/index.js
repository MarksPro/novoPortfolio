import React, { Component } from 'react';
import HeaderIntro from '../../components/HeaderIntro';
import SectionPortfolio from '../../components/SectionPortfolio';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <HeaderIntro/>
        <SectionPortfolio/>
      </>
     );
  }
}
 
export default Home;