import React from 'react';
import {HashLink} from 'react-router-hash-link';
import NavLink from '../NavLink';

import Logo from '../../assets/images/Logo.png'

const Header = () => {
  return ( 
    <header>
      <HashLink><img src={Logo}></img></HashLink>
      <nav>
        <NavLink/>
      </nav>
    </header>
   );
}
 
export default Header;