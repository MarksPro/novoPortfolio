import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import marcaDagua from '../../assets/images/marca.png'

const HeaderIntro = () => {
  return ( 
    <section>
      <img src={marcaDagua}></img>
      <span>Front-End</span>
      <h2>Marcos</h2><span></span>
      <span></span><h2>Roberto</h2>
      <span>Profissional</span>
      <Link>Portfólio</Link>
    </section>
   );
}
 
export default HeaderIntro;