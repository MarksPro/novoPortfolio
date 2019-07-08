import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import desktop from '../../assets/images/desktop.png'
import tablet from '../../assets/images/Tab.png'
import phone from '../../assets/images/Cel.png'

class SectionPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
      <section>
        <div>
          <img src={desktop} alt="Desktop"></img>
        </div>
        <div>
          <h2>titulo</h2>
          <span></span>
          <p>descrição</p>
          <Link>Link1</Link>
          <Link>Link2</Link>
        </div>
        <div>

        </div>
      </section>
      <section>
        <div>
          <h2>titulo</h2>
          <span></span>
          <p>descrição</p>
          <Link>Link1</Link>
          <Link>Link2</Link>
        </div>
         <div>
          <img src={phone} alt="Desktop"></img>
          <img src={tablet} alt="Desktop"></img>
          <img src={desktop} alt="Desktop"></img>
        </div>
      </section>
      </>
     );
  }
}
 
export default SectionPortfolio;