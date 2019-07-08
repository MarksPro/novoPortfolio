import React, { Component } from 'react';
import HeaderIntro from '../../components/HeaderIntro';
import SectionPortfolio from '../../components/SectionPortfolio';
import SectionPerfil from '../../components/SectionPerfil';
import SectionContato from '../../components/SectionContato';
import Footer from '../../components/Footer';

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
        <SectionPerfil/>
        <SectionContato/>
        <Footer/>
      </>
     );
  }
}
 
export default Home;