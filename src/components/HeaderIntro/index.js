import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import marcaDagua from '../../assets/images/marca.png'

const HeaderIntro = () => {
  return ( 
    <section className="sectionIntro">
      <img className="sectionIntro__marcaDagua" src={marcaDagua}></img>
      <div className="sectionIntro__content__area">
        <span className="sectionIntro__subtitle">Front-End</span>
        <h2 className="sectionIntro__title" >Marcos <span className="sectionIntro__adorno__after"></span></h2>
        <h2 className="sectionIntro__title"> <span className="sectionIntro__adorno"></span> Roberto</h2>
      </div>
      <Link className="btn">Portfólio</Link>
    </section>
   );
}
 
export default HeaderIntro;